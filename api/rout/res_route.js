const express = require('express');
const router = express.Router();
const qxsql = require('./helpers/recipes');

// middleware
const routeGuard = require('../../flavors/routeGuard');

// ROUTE FOR FOOD CREATION

// host:port/recipes
// GET ALL
router.get('/', async (req, res)=>{
    try{
        all = await qxsql.find();
        !all
        ? res.status(404).json({message: 'NOT FOUND'})
        : res.status(200).json(all);
    }catch(e){
        res.status(500).json(e);
    }
});

// host:port/recipes
// POST res
router.post('/' , async (req, res) =>{
    try{
        routeGuard(req.headers.token, res);

        const recipe = req.body;

        !recipe
        ? res.status(422).json({message: 'cannot receive nothing'})
        : qxsql.insert(recipe) 
        && res.status(201).json(recipe);
        
    }catch(error){
        res.status(500).send(error);
    }
});

// host:port/recipes/:id
// DELETE
router.delete('/:id', (req, res) => {
    try{
        routeGuard(req.headers.token, res);
        qxsql.remove(req.params.id)
        .then(deleted => {
          deleted
          ? res.status(200).json({ message: 'Recipe has been deleted' })
          : res.status(404).json({ message: 'There are no recipes that have this ID' });
        })
    }catch(error){
        res.status(500).json(error);
    }
});

module.exports = router;
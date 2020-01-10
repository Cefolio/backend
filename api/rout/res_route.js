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
        // routeGuard(req.headers.token, res);

        const recipe = req.body;

        !recipe
        ? res.status(422).json({message: 'cannot receive nothing'})
        : await qxsql.insert(recipe)
        && qxsql.findChef(recipe.user_id).then(
            data => {res.status(201).json(data)}
        );
        
    }catch(error){
        res.status(500).send(error, console.log(error));
    }
});

// host:port/recipes/:id
// DELETE
router.delete('/:id', async (req, res) => {
    try{
        req.headers.token 
            ? await qxsql.remove(req.params.id)
            .then(deleted => {
                deleted
                ? res.status(200).json({message: 'Recipe deleted'})
                : res.status(404).json({message: 'I cannot delete what I does not exist.'});
            })
            : console.log('no token')
    }catch(error){
        res.status(500).json(error, console.log(error));
    }
});

// host:port/recipes/usr/:id
// GET by user_id
router.get('/usr/:id', async (req, res) => {
    try{
        await qxsql.findChef(req.params.id)
        .then(data => {
            data
            ? res.status(200).json(data)
            : res.status(404).json({message: 'This chef has no recipes yet.'});
        });
    }catch(error){
        res.status(500).json(error);
    }
});


// host:port/recipes/:id
// GET by recipes ID
router.get('/:id', async (req, res) => {
    try{
        await qxsql.findById(req.params.id)
        .then(data => {
            data
            ? res.status(200).json(data)
            : res.status(404).json({message: 'There is no recipe with this id.'});
        });
    }catch(error){
        res.status(500).json(error);
    }
});

// host:port/recipes/:category
// GET by meal_type
router.get('/:category', async (req, res) => {
    try{
        await qxsql.findGenre(req.params.category)
        .then(data => {
            data
            ? res.status(200).json(data)
            : res.status(404).json({message: 'No Meals In This Category'});
        });
    }catch(error){
        res.status(500).json(error);
    }
});

//// host:port/recipes/:id
// PUT for a recipe
router.put('/:id', async (req, res) => {
    try{
        routeGuard(req.headers.token, res);
        const id = req.params.id
        const recipe = req.body;

        !recipe
        ? res.status(422).json({message: 'cannot edit'})
        : qxsql.update(id, recipe) 
        && res.status(201).json(recipe);
        
    }catch(error){
        res.status(500).send(error);
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
// sql functions
const qxsql = require('./helpers/user');

// auth
const bcrypt = require('bcryptjs')
const { tkGive } = require('../../flavors/tkservice')
const routeGuard = require('../../flavors/routeGuard');

// ⪻oo+ ROUTES +oo⪼
// host:port/users
//GET all users
router.get('/', async (req, res) => {
    try{
        const users = await qxsql.find();
        users
        ? res.status(200).json(users)
        : res.status(404).json('NOT FOUND ಥ_ಥ ');
    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
});

// host:port/users/registration
// POST a User
router.post('/registration', async (req, res) => {

    // requires a username, name, password, email to accept

    try{
        let salty = await bcrypt.genSalt(12)
        let encryptedPass = await bcrypt.hash(req.body.password, salty);
        const token = tkGive(req.body.email);
        const user = {
                      password: encryptedPass,
                      email: req.body.email,
                      username: req.body.username,
                      name: req.body.name,
                      phone_number: req.body.phone_number,
                      location: req.body.location,
                      bio: req.body.bio
                    };
        console.log(user)
        // first we check if the email exists
        qxsql.findByEmail(user.email)
        .then(emailCheck =>{
          emailCheck === undefined || emailCheck.email != user.email && user
          // email, password, and name are required to create a new user
          ? !user.password || !user.email || !user.name
            ? res.status(400).json({message: 'Please provide an email, name and password while creating a user'})
            // after adding user, find user from db and return user obj with id included
            : qxsql.add(user) && qxsql.findByEmail(user.email).then(user => {
              res.status(201).json({user, token})
            })
          : res.status(409).json({message: 'Email already exists'});
        });
      }
      catch(error){
        res.status(500).send(error);
      }
});

// host:port/users/login
// POST login
router.post('/login', async (req, res) => {
    let {email , password} = req.body;

    // fist search for the email
    qxsql.findByEmail(email)
      .then(user=>{
        // compare passwords to see if they match
        if(user && bcrypt.compareSync(password, user.password)){
          // generate token //
          const token = tkGive(user.email);
          //   send   //
          res.status(202).json({
            message: `Welcome ${user.username}.` , token, user
          });
        } else {
          res.status(422).json({message: 'Invalid Login'});
        }
      })
      .catch(error =>{
        res.status(500).json(error);
      }
)});

// host:port/users/:id
// GET user by ID
router.get('/:id', (req, res) => {
    try{
        qxsql.findById(req.params.id)
        .then(user => {
            user
            ? res.status(200).json(user)
            : res.status(404).json({ message: 'There are no users that have this ID' });
          })
    }catch(error){
        res.status(500).json(error);
    }
});

// host:port/users/:id
// DELETE user
router.delete('/:id',  (req, res) => {
    routeGuard(req.headers.token, res);
    model.remove(req.params.id)
      .then(deleted => {
        deleted
        ? res.status(200).json({ message: 'Like they were never here.' })
        : res.status(404).json({ message: 'This is not the user you are looking for' });
      }).catch(error =>
        res.status(500).json(error));
});

module.exports = router;
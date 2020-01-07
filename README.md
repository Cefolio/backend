# backend

## Server

https://chefmode.herokuapp.com/

 ## Users

api will send you json objects

### GET all users

https://chefmode.herokuapp.com/users/

### Register a User

https://chefmode.herokuapp.com/users/registration

 ```
 {
     "username": string,
     "name": string,
     "password": string,
     "email": string,
    "phone_number": string,
    "location":string,
    "bio":string
 }
 ```

### Log In

https://chefmode.herokuapp.com/users/login

```
{
    "email": string,
    "password": string
}
```

### Find a User by ID

https://chefmode.herokuapp.com/users/:id

### Delete User

https://chefmode.herokuapp.com/users/:id

## Recipes

### GET all recipes

https://chefmode.herokuapp.com/recipes/

### POST recipes

https://chefmode.herokuapp.com/recipes/

```
{
    "title": string,
    "meal_type" : string,
    "img": string,
    "ingredients": string,
    "instructions" : string,
    "user_id" : integer
}
```

### DELETE 

https://chefmode.herokuapp.com/recipes/:id

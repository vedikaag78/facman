const express = require("express")
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const User = require('../models/user')
const userRouter = express.Router()

userRouter.use(express.json())

userRouter.route('/signup')
.post(async(req,res,next) =>{
    const newuser = req.body
    newuser.password = await bcrypt.hash(newuser.password,10)
    User.create(newuser)
        .then((user)=>{
            res.statusCode = 200,
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        }, (err) => next(err)
        )
        .catch((err) => next(err));
})

userRouter.route('/signin')
.post(async(req,res,next) =>{
    const user = await User.find({email : req.body.email})
    if( user == null){
          res.statusCode = 404,
          res.json("user not found")
    }

    else{
     
            if( await bcrypt.compare(req.body.password, user.password)){
                res.statusCode = 200,
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }
            else{
                res.statusCode = 401,
                res.json("wrong password")
            }
    }
    
})

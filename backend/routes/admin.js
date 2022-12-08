const express = require("express")
const mongoose = require("mongoose")
const Product = require('../models/product')
const Sales = require("../models/sales")
const User = require("../models/user")
const Chalan = require("../models/chalan")
const adminRouter = express.Router()

adminRouter.use(express.json())

adminRouter.route('/stock')
    .get((req,res,next) =>{
        Product.find({})
        .then((stock) =>{
            res.statusCode = 200,
            res.setHeader('Content-Type', 'application/json');
            res.json(stock);
         }, (err) => next(err)
        )
        .catch((err) => next(err));
    })
    .put((req,res,next) =>{
        Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        .then((product) =>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(product);
        }, (err) => next(err))
        .catch((err) => next(err));
    
    })
    .delete((req,res,next) =>{
        Product.findByIdAndDelete(req.params.id)
        .then((resp) =>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        },(err) => next(err))
        .catch((err) => next(err))
    })

adminRouter.route('/sales')
    .get((req,res,next) =>{
        Sales.find({})
        .then((sold) =>{
            res.statusCode = 200,
            res.setHeader('Content-Type', 'application/json');
            res.json(sold);
        }, (err) => next(err)
        )
        .catch((err) => next(err));
    })
    .put((req,res,next) =>{
        Sales.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        .then((sold) =>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(sold);
        }, (err) => next(err))
        .catch((err) => next(err));
    
    })
    .delete((req,res,next) =>{
        Sales.findByIdAndDelete(req.params.id)
        .then((resp) =>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        },(err) => next(err))
        .catch((err) => next(err))
    })

adminRouter.route('/manageuser')
    .get((req,res,next) =>{
        User.find({})
        .then((user) =>{
            res.statusCode = 200,
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        }, (err) => next(err)
        )
        .catch((err) => next(err));
    })
    .put((req,res,next) =>{
        User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        .then((sold) =>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(sold);
        }, (err) => next(err))
        .catch((err) => next(err));
    
    })
    .delete((req,res,next) =>{
        User.findByIdAndDelete(req.params.id)
        .then((resp) =>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        },(err) => next(err))
        .catch((err) => next(err))
    })


adminRouter.route('/viewchalans')
    .get((req,res,next) =>{
        Chalan.find({})
        .then((chalans) =>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(chalans);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
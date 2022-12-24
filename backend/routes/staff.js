const express = require("express")
const mongoose = require("mongoose")
const Product = require('../models/product')
const Sales = require("../models/sales")
const Chalan = require("../models/chalan")
const operatorRouter = require("./operator")
const staffRouter = express.Router()

staffRouter.use(express.json())

staffRouter.route('/chalans')
    .post((req,res,next) =>{
        Chalan.create(req.body)
        .then((chalan) =>{
            res.statusCode = 200,
            res.setHeader('Content-Type', 'application/json');
            res.json(chalan);
        }, (err) => next(err)
        )
        .catch((err) => next(err));
       
    })
    .get((req,res,next) =>{
        Chalan.find({})
        .then((chalans) =>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(chalans);
        }, (err) => next(err))
        .catch((err) => next(err));
    })

staffRouter.route('/stock')
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
    
staffRouter.route('/sales')
    .get((req,res,next) =>{
        Sales.find({})
        .then((sales) =>{
            res.statusCode = 200,
            res.setHeader('Content-Type', 'application/json');
            res.json(sales);
         }, (err) => next(err)
        )
        .catch((err) => next(err));
    })

 module.exports = staffRouter
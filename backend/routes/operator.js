const express = require("express")
const mongoose = require("mongoose")
const Product = require('../models/product')
const Sales = require("../models/sales")
const Chalan = require("../models/chalan")

const operatorRouter = express.Router()

operatorRouter.use(express.json())

operatorRouter.route('/stock')
    .post((req,res,next) =>{
        Product.create(req.body)
        .then((product)=>{
            res.statusCode = 200,
            res.setHeader('Content-Type', 'application/json');
            res.json(product);
        }, (err) => next(err)
        )
        .catch((err) => next(err));
    })
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
    
operatorRouter.route('/sales')
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

operatorRouter.route('/chalans')
    .get((req,res,next) =>{
        Chalan.find({})
        .then((chalans) =>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(chalans);
        }, (err) => next(err))
        .catch((err) => next(err));
    })

module.exports = operatorRouter
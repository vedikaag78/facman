const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {   
        unit:{
            type: String,
            require: true
        },
        size:{
            type: Number,
            require: true
        },
        length:{
            type: Number,
        },
        weight:{
            type: Number,
        },
        actualweight:{
            type: Number,
        },
        numberofcoils:{
            type: Number,
        },
        batchno:{
            type: String,
        }       
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('product', ProductSchema)
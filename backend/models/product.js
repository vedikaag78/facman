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
        scrap:{
            type: Number,
        },
        numberofcoils:{
            type: Number,
        },
        batchno:{
            type: String,
        },
        series:{
            type: String,
        },
        standard:{
            type: String,
        },
        rawmaterialgrade:{
            type: String,
        } ,
        series:{
            type: String,
        },
        machinenumber:{
            type: String,
        },

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('product', ProductSchema)
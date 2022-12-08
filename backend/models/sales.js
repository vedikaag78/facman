const mongoose = require("mongoose")

const SalesSchema = new mongoose.Schema(
    {
        unit:{
            type: String,
            
        },
        size:{
            type: Number,
            require: true
        },
        length:{
            type: Number,
            
        },
        numberofcoils:{
            type: Number,
            
        },
        batchno:{
            type: String,
            require: true
        },
        challanno:{
            type: Number,
            require: true
        },
        vehicleno:{
            type: String,
        },
        buyername:{
            type: String
        },
        discount:{
            type: String,
        },
        
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('sales', SalesSchema)

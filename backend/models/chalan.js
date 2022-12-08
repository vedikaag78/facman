const mongoose = require("mongoose")

const ChalanSchema = new mongoose.Schema(
    {
        unit:[
       
        ],
        size:[
        
        ],
        length:[
        
        ],
        numberofcoils:[
            
        ],
        batchno:[

        ],
        salesbillno:{
            type: String
        },
        vehicleno:{
            type: String,
        },
        buyername:{
            type: String
        },
        buyervatno:{
            type: String
        },
       
    },{
        timestamps: true
    }
)

module.exports = mongoose.model('chalan', ChalanSchema)
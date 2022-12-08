const mongoose = require("mongoose")

const SalesSchema = new mongoose.Schema(
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
        rate:[

        ],
        amount:[

        ],
        total:{
            type: Number
        },
        discount:{
            type: Number,
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
        partyname:{
            type: String
        },
        partycontact:{
            type: Number
        }
      
        
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('sales', SalesSchema)

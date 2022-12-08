const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phonenum:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    usertype:{
        type: String
    },
    },
    {
       timestamps: true,
    }
)

module.exports = mongoose.model('user', UserSchema)

const mongoose = require("mongoose")
var passportlocalMongoose = require("passport-local-mongoose")
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
    usertype:{
        type: String,
        default: "staff"
    },
    },
    {
       timestamps: true,
    }
)
UserSchema.plugin(passportlocalMongoose)
module.exports = mongoose.model('user', UserSchema)

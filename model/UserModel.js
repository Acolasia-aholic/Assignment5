const mongoose = require("mongoose")

const UserType = {
    username:String,
    something:String,
    days:Number
}

const UserModel = mongoose.model("user",new mongoose.Schema(UserType))

module.exports = UserModel
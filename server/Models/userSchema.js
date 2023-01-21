const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model('user', UserSchema);
module.exports = User
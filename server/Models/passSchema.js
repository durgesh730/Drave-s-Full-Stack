const mongoose = require('mongoose')
const {Schema} = mongoose

const passwordSchema = new Schema({
    Currpassword:{
        type:String,
        required:true
    },
    Newpassword:{
        type:String,
        required:true
    },
    Conpassword :{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
})

const password = mongoose.model('password', passwordSchema);
module.exports = password
const mongoose = require('mongoose')
const {Schema} = mongoose

const infoSchema = new Schema({
    bio:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    gender:{
        type:String,
    },
    data:{
        type:Date,
        default:Date.now
    }

})

const info = mongoose.model('info',infoSchema);
module.exports = info
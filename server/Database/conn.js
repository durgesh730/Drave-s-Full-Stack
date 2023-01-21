const mongoose = require('mongoose');

const DB = "mongodb+srv://Durgesh:Durgesh02042001@cluster0.skc6gmq.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);
const connectToMongoose =()=>{
    mongoose.connect(DB, ()=>{
        console.log("connected to mongo Successfully");
    })
}


module.exports = connectToMongoose;
const express = require("express")
const router = express.Router();
const User = require('../Models/userSchema');
const Password = require('../Models/passSchema')
const info = require('../Models/infoSchema');
const bcrypt = require('bcrypt');

router.post('/account' , async (req, res)=>{

    const {username, name, email, role, status, company} = req.body;

    if(!username || !name || !email){
        res.status(200).send({msg:"Plz Enter All deatils"})
    }
    try {

        const user = new User({username, name, email, role, status, company});
        const savedUsers = await user.save();
        res.status(201).json({status:201, savedUsers}) 

    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured");
    }
})

router.post('/password', async (req, res)=>{
     
    const { Currpassword,  Newpassword, Conpassword} = req.body;

    if(!Currpassword || !Newpassword || !Conpassword){
        res.status(200).send({msg:"Plz Enter All deatils"})
    }
    
    try {
        const salt = await bcrypt.genSalt(10);
        const Conpass = await  bcrypt.hash(req.body.Conpassword, salt);
        const Currpass =await bcrypt.hash(req.body.Currpassword, salt);
        const Newpass = await bcrypt.hash(req.body. Newpassword, salt);

        const user = await Password.create({
            Conpassword:Conpass,
            Currpassword: Currpass,
            Newpassword:Newpass
        })

        res.status(201).json({status:201, user});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured");
    }

});


router.post('/info' , async (req, res)=>{

    const { bio,  DOB, website,  country, language,  gender} = req.body;

    if(! DOB || !country || !language){
        res.status(200).send({msg:"Plz Enter All deatils"})
    }
    try {

        const user = new info({ bio,  DOB, website,  country, language,  gender});
        const savedinfo = await user.save();
        res.status(201).json({status:201, savedinfo}) 

    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured");
    }
})



module.exports = router
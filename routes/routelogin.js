const express = require('express');
const router = express();
const Creador = require('../model/creador');
let verify = require('../middleware/verifyAccess');
const req = require('express/lib/request');
let jwt = require("jsonwebtoken")
let bcrypt = require("bcrypt")

router.get("/", async (req, res) => {
    res.render("pages/login")
})

router.post("/",async(req,res)=>{
    let email = req.body.correo
    let plainpassword = req.body.password
    console.log(email)
    console.log(plainpassword)
    let user = await Creador.findOne({correo:email})

    if(!user){
        res.redirect('/login')
    }
    else{
        let valid = await bcrypt.compareSync(plainpassword,user.password)
        if(valid){
            let token = jwt.sign({id:user._id},process.env.SECRET,{expiresIn:"1h"})
            console.log(token)
            res.cookie("token", token, {httpOnly:true})
            res.redirect("/")
        }
        else{
            res.redirect("/login")
        }
    }
})

module.exports = router;
const express = require('express');
const router = express();
let verify = require('../middleware/verifyAccess')
const Creador = require('../model/creador');
let bcrypt = require("bcrypt")

router.get("/", async (req, res) => {
    res.render("pages/register")
})

router.post('/addUser', async (req,res)=>{
    let user = new Creador(req.body)
    user.password = bcrypt.hashSync(user.password,10)
    await user.save()
    console.log(user)
    res.redirect("/login")
})

module.exports = router;
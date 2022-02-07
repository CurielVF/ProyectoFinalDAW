const express = require('express');
const router = express();
let verify = require('../middleware/verifyAccess')

router.get("/",verify, async (req, res) => {
    res.render("pages/acercade")
})

module.exports = router;
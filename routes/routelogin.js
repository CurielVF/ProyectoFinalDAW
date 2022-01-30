const express = require('express');
const router = express();

router.get("/", async (req, res) => {
    res.render("pages/login")
})

module.exports = router;
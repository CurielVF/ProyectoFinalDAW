var express = require("express");

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');


app.get("/",(req,res)=>{
    res.render("pages/index")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
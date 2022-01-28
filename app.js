var express = require("express");

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views','views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//Importar rutas
const indexRoutes = require('./routes/routeindex');
const creadorRoutes = require('./routes/routecreador');


//Rutas
app.use('/', indexRoutes);
app.use('/creador', creadorRoutes);

app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})
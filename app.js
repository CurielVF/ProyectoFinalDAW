const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
let dotenv = require("dotenv");
let cookieParser = require("cookie-parser")

dotenv.config();

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views','views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser())

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

// connection to Mongo db
mongoose.connect(process.env.MONGODB_HOST,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));


//Importar rutas
const indexRoutes = require('./routes/routeindex');
const creadorRoutes = require('./routes/routecreador');
const juegoRoutes = require('./routes/routejuego');
const agregarJuegoRoutes = require('./routes/routeagregarjuego');
const perfilRoutes = require('./routes/routeperfil');
const acercaDeRoutes = require('./routes/routeacercade');
const loginRoutes = require('./routes/routelogin');
const modificarJuegoRoutes = require('./routes/routemodificarjuego');
const registerRoutes = require('./routes/routeregister');

//Rutas
app.use('/', indexRoutes);
app.use('/creador', creadorRoutes);
app.use('/juego', juegoRoutes);
app.use('/agregarjuego', agregarJuegoRoutes);
app.use('/perfil', perfilRoutes);
app.use('/login', loginRoutes);
app.use('/acercade', acercaDeRoutes);
app.use('/modificarjuego', modificarJuegoRoutes);
app.use('/register', registerRoutes);

app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})
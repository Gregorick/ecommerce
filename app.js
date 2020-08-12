const express = require('express')
const app = express()
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');


// Configuraciones
app.set('port', process.env.PORT || 8000)
require('dotenv').config()
require('./database');

// Middlewares

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// RUTAS
app.get('/', (req, res) => {
    res.end("hola node bien de bien")
})
app.use('/api', require('./routes/auth'))
app.use('/api', require('./routes/user'))
app.use('/api', require('./routes/category'))
app.use('/api', require('./routes/product'))
app.use('/api', require('./routes/braintree'))
app.use('/api', require('./routes/order'))
// Inicializar Servidor
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`)
})
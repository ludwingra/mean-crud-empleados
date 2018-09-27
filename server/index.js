const express = require('express');
const morgan = require('morgan');
const app = express();


const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); // Nos da mensajes por la terminal
app.use(express.json()); // Convertir y entender codigo que vengan desde del navegador en formato json


// Routes
app.use('/api/employess', require('./routes/employee.routes'));

// Staring the server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
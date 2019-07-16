const express = require('express');

const pg = require ('pg');
//const dontenv = require('dotenv').config()

const bodyParser = require('body-parser');

const morgan = require ('morgan');

const app = express();
//import 'babel-polyfill';
//const bcrypt = require ('bcrypt');

const authRoutes = require('./apis/routes/auth');

const bookingsRoutes = require('./apis/routes/bookings');

const tripsRoutes = require('./apis/routes/trips');
const dbConn = require ('./db/conn');

//middlewares
//const port =  5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(morgan('dev'));

//handling endpoint requests
app.use('/auth', authRoutes) ;
app.use('/bookings', bookingsRoutes) ;
app.use('/trips', tripsRoutes) ;


//error handling 1
app.use(function(req,res,next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handling 2

app.use(function(req, res, next) {
    res.status(err.status || 500);
    res.json({
        message : err.message, 
        error: req.app.get('env') === 'development' ? err :{}
    });
   
});




/*app.get('/', (req, res) => {
res.status(200).send({
    message :'success'
})
})*/





//const server = http.createSrver(app);


module.exports = app;
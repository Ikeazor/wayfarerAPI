
const express = require ('express');

const router = express.Router();
//const bcrypt = require ('bcrypt');
//const pg = require ('./db/conn');


//to validate all user data

function validUser(user){
   const validEmail = typeof user.email == 'String' 
                        && user.email.trim() != ''; 
   const validPassword = typeof user.password == 'String' && user.password.trim() != ''
                         && user.password.trim().lenght >= 8;

   //const validFirst_name = typeof user.first_name == 'String' && user.first_name.trim() != ''; 
   //const validlast_name = typeof user.last_name == 'String' && user.last_name.trim() != ''; 

    return validEmail && validPassword ;//&& validFirst_name && validlast_name ;
 }

//user signup
 router.post('/v1/signup',(req, res, next) => {  
 
   const results = [];
   //grab data from input request
   //const data = {email:req.body.email, password:req.body.password, first_name:req.body.first_name, last_name:req.body.last_name};

   //connect to database
   const pg = require('pg');
   const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/wayfarer_db'; 
   const client = new pg.Client(connectionString, (err,client,done) => {
      //handling connection errors
      if(err){
         done();
         console.log(err);
         return res.status(500).json({success: false, data: err});
      }
   });
   client.connect()

});







module.exports = router;
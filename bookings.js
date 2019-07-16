
const express = require ('express');
const router = express.Router();
//const {Pool} = require('pg');

//book a seat on a trip
router.post('/',(req, res) => {
      res.status(200).json({
         message: 'successful'
      });

   //console.log('post body', req.body) ;
   //const sql = 'INSERT INTO bus (number_plate,manufacturer,model) values ($1,$2,$3)'
   //const params = [req.body.number_plate, req.body.manufacturer,req.body.model];
   //return pool.query(sql, params);
   //})
   //.then((result) => {
     // console.log('results?', result);
      //res.redirect('/');
  // });
});
   /*.then((result) => {
      console.log('results?', result);

      });
   
   });*/

//get bookings view all bookings
 router.get('/',(req, res) =>{
    res.status(200).send({
        status : 'success',
        message : 'seeing all bookings',
        data :{
          /*  booking_id: 4657,
            user_id:65,
            trip_id:76,
            bus_id:857,
            trip_date:24/05/2019,
            seat_number: 75,
            first_name: hyacinth,
            last_name:afam,
            email:westwizo,*/
        }
       //username : req.params.signupId

    }) ;
 });

 //to get a particual seat
 router.get('/:bookingId',(req, res) => {
   res.status(200).send({
      //const bookings {}
       status : 'success',
       message : 'delte successful',
        bookingId : req.params.bookingId
        
       });
      //username : req.params.signupId

  
});






 //to get a particular seat
 router.put('/:bookingId',(req, res) =>{
    res.status(200).send({
        status : 'success',
        message : 'update successful',
        data :{
         /*   booking_id: 4657,
            user_id:65,
            trip_id:76,
            bus_id:857,
            trip_date:24/05/2019,
            seat_number: 75,
            first_name: hyacinth,
            last_name:afam,
            email:westwizo,*/
        }
       //username : req.params.signupId

    }) ;
 });

//to delete booking
router.delete('/:deleteId',(req, res) => {
    res.status(200).send({
        status : 'success',
        message : 'delete successful',
         deleteId : req.params.deleteId
         
        });
       //username : req.params.signupId

   
 });




 module.exports = router;
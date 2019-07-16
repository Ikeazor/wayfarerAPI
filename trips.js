
const express = require ('express');
const router = express.Router();

//create a trip
router.get('/create',(req, res) => {
   /* const data = {
        bus_id : req.body.bus_id,
        origin : req.body.origin,
        destination : req.body.destination,
        trip_date : req.body.trip_date,
        //fare : req.body.fare,
        //status : req.body.active,}*/
        
        const pg = require('pg');
        const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/wayfarer_db'; 
        const client = new pg.Client(connectionString);
        client.connect()
     //.then(() => console.log("connection to database successful"))
            .catch((err) => {
              console.log(`database err: ${err}`)
            })
       const query = ("insert into trip values ($1, $2, $3,$4,$5,$6,$7)", [9, '545', 'Lagos', 'Enugu', "2019-02-12", '5000','Active', ])
        
       .catch((err) =>{
        console.log(`failed: ${err}` );
                })
    .then(() => client.query(' select * from trip'))
    //client.query(query,(error,results) => { 
    .then((results) => console.table(results.rows));
    res.status(200).send({
        status :'ok ',
        data : result.rows,
    });
         });
    







 // view all trips
 router.get('/',(req, res) =>{
    res.status(200).send({
        status : 'success',
        message : 'seeing all trips',
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

 //to get a trip
 router.get('/:tripId',(req, res) => {
   res.status(200).send({
       status : 'success',
       message : 'delete successful',
        bookingId : req.params.bookingId
        
       });
      //username : req.params.signupId

  
});






 //to update trip
 router.put('/:tripId',(req, res) =>{
    res.status(200).send({
        status : 'success',
        message : 'trip update successful',
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
router.delete('/:tripId',(req, res) => {
    res.status(200).send({
        status : 'success',
        message : 'trip delete successful',
         tripId : req.params.tripId
         
        });
       //username : req.params.signupId

   
 });




 module.exports = router;
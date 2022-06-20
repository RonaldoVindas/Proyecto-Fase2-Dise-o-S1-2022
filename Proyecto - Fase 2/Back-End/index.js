const { Router } = require('express');
const router = Router();
const express = require('express');
const { path } = require('express/lib/application');
const mysqldb = require('..//MySQL-DBConnection/MysqlConnection');
const passport = require('passport');
const { waitForDebugger } = require('inspector');

module.exports = router;

router.get('/', (req, res)=> {
    res.render('login');
});

router.post('/', passport.authenticate('local', {
    
    successRedirect: "/parqueos",
    failureRedirect:  "/",
    failureFlash: true
    
    
}));

router.get('/exit', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });


router.get('/parqueos', async (req, res)=> {
    const email = req.session.passport.user
    const user_id = await mysqldb.getUserIdbyEmail(email)
    const user_type = await mysqldb.GetUserType(user_id)

    //Simula patrón Chain of Responsability
    if(user_type == 1){
        var parking_lots = await mysqldb.getAllParkings();
        res.render('parqueos', { parking_lots: parking_lots,numero: 1 });
    }

    else if(user_type == 2){
        var parking_lots = await mysqldb.getAllParkingsLeadership();      
       
        res.render('parqueos', { parking_lots: parking_lots, numero: 2});


    }

    else if(user_type == 3){
        var parking_lots = await mysqldb.getAllParkingsDisable();
        res.render('parqueos', { parking_lots: parking_lots, numero: 3 });
    }
    
    else if(user_type == 4){
        //Código operador de parqueo....
    }

});

router.post('/parqueos', async (req, res)=> {
     
     res.redirect('/parqueos/');
});

router.get('/parqueos/:id', async (req, res)=> {
    const {id} = req.params;

    res.render('horarios', {id: id});

});

router.post('/horarios/:id/button', async (req, res)=> {
    var buttonText = String (req.body.reserve_button).split("-")
    const email = req.session.passport.user
    const user_id = await mysqldb.getUserIdbyEmail(email)
    const parking_id = req.body.id
    await mysqldb.insertUserReserveParking(user_id, parseInt(parking_id), "Reserva Parqueo", buttonText[0], parseInt(buttonText[1]),parseInt(buttonText[2]))
    res.redirect('/parqueos');
});


router.get('/stats', async (req, res)=> {
    res.render('estadisticas');

});




/*router.get('/parqueos/:id', async (req, res)=> {
   const {id} = req.params;
   console.log(await mysqldb.GetParkingLocation(id))
   res.render('horarios');
});*/
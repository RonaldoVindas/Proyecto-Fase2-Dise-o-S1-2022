const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;
const mysqldb = require('./MySQL-DBConnection/MySQLConnection');


let fechaActual = new Date();



app.use(express.urlencoded({ extended: false}));

app.use(cookieParser('secret'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true

}));

app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname,'/Front-End'));
app.use(express.urlencoded({extended: false}));
app.set('view engine','ejs');

// middlewares

passport.use(new PassportLocal(async function(username,password,done) {
    if(username == await mysqldb.existsEmail(username)){
            return done(null,{email: username});
    }
    done(null,false);
}));


passport.serializeUser(function(user,done){
    done(null,user.email);
});

passport.deserializeUser( async function(email,done){
    done(null,{email: await mysqldb.existsEmail(email)})

});

//routers
app.listen(3000, ()=> {
    console.log('Conectado en Localhost:',3000);
});

//Routes
app.use(require('./Back-End/index'));
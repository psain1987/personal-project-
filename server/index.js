require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session');

// const ctrl = require('./controller');
const authCtrl = require('./authController')

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
);

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
})
.then((db) => {
    app.set('db', db)
    console.log('DB is online!')
})
.catch(err => console.log(err))

//Authorization Endpoints
app.post('/api/login', authCtrl.login)
app.post('/api/register', authCtrl.register)
app.delete('/api/logout', authCtrl.logout) 

//All the other endpoints
app.get('/api/randomCar');
app.get('/api/allCars');
app.get('/api/oneCar');
app.post('/api/favCar');
app.put('/api/makeNote');
app.delete('/api/deleteCar');






app.listen(SERVER_PORT, () => console.log(`Server is operating on port: ${SERVER_PORT}`))
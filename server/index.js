require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session');

const ctrl = require('./controller');
const authCtrl = require('./authController')
const middleware = require('./middleware')

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
app.get('/api/oneUser', middleware.checkUser, authCtrl.getUser)
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.post('/api/logout', authCtrl.logout) 

//All the other endpoints
app.get('/api/randomCar', ctrl.getRandomCar);
app.get('/api/allCars', ctrl.getAllCars);
app.get('/api/oneCar/:id', ctrl.getOneCar);
app.post('/api/favCar', ctrl.getFavCar);
app.put('/api/makeNote', ctrl.noteMaker);
app.delete('/api/deleteCar', ctrl.deleteCar);






app.listen(SERVER_PORT, () => console.log(`Server is operating on port: ${SERVER_PORT}`))
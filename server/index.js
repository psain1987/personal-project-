require('dotenv').config();

const express = require('express');
const massive = require('maassive');
const session = require('express-session');

const ctrl = require('./controller');
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

app.listen(SERVER_PORT, () => console.log(`Server is operating on port: ${SERVER_PORT}`))
// external import
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// internal import
const loginRoute = require('./routers/loginRoute.js');
const signUpRoute = require('./routers/signUpROute');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// database connection
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('database connection successfull'))
    .catch((err) => console.log(err));

// routing
app.use('/users', signUpRoute);
app.use('/users', loginRoute);

// ************ error handling ****************
// not found handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'requested url not found',
    });
    next();
});

// application error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
    });
});

// application running on
app.listen(process.env.APP_PORT || 4000, () => {
    console.log(`listening on ${process.env.APP_PORT} port`);
});

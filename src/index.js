import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

// local imports
import exampleController from './controllers/exampleController';

// initalize dotenv to be able to use hidden environment variables
dotenv.config();

const app = express();

// disabling the express startup message (not necessary but saves log space in a production app)
app.disable('x-powered-by');

// this is because of 304 status code / express just sending cached data
app.disable('etag');

// convert incoming json data into a JS object
app.use(express.json());

// tell express to parse url-encoded data
app.use(express.urlencoded({ extended: false }));

// tell express to parse cookies
app.use(cookieParser());

// package for logging incoming requests
app.use(morgan('dev'));

// TODO: add and configure CORS

// routes
app.use('/api/v1', exampleController);

app.use('*', (req, res) => res.status(404).json({ error: 'invalid route' }));

app.listen(process.env.PORT, () => {
    console.log(`REST API on http://localhost:${process.env.PORT}`);
});

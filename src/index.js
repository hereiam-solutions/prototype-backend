import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { urlencoded } from 'body-parser';

const app = express();

app.disable('x-powered-by');

// this is because of 304 status code / express just sending cached data
app.disable('etag');

app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Welcome!'));

app.use('*', (req, res) => res.status(404).json({ error: 'invalid route' }));

app.listen(3000, () => {
    console.log(`REST API on http://localhost:3000`);
});

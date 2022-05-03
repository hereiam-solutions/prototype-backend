import express from 'express';
import exampleController from '../controllers/exampleController';

// create the router object
const router = express.Router();

router.route('/').get(exampleController.getMany);

export default router;

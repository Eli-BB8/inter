import * as express from 'express';
import { wrapController } from '../wraps';
import * as controller from '../controllers/get';
import validateRequest from '../joi/joi';
import { vacationSchema } from '../joi/validator.schema';

const router = express.Router();

router.get('/vacation', validateRequest(vacationSchema), wrapController(controller.getVacations));

export default router;

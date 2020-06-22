import { Router } from 'express';
import appointmentsRouter from './appointmens.routes';

const routes = Router();
routes.use('/appointments', appointmentsRouter);

export default routes;

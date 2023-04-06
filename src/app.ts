import { AppDataSource } from './data-source';
import { config } from 'dotenv';
import { Application, json, NextFunction, Request, Response, Router } from 'express';
import express from 'express';
import 'reflect-metadata';
import { patientsRouter } from './modules/patients/patients-router';
import { servicesRouter } from './modules/services/services-router';
import { appointmentsRouter } from './modules/appointments/appointments-router';
import { handleErrors } from './commons/handleErrors';
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
const swaggerDocument = require('./swagger.ts');
// import * as swaggerDocument from "./swagger.json";

config();

// Routes Index
const routes = Router();
routes.use('/patient', patientsRouter);
routes.use('/service', servicesRouter);
routes.use('/appointment', appointmentsRouter);

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Toucan Talent Test');
});

/**
 * Global routes.
 */
app.use(json(), routes);
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

/**
 * Middleware to handle api errors.
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) =>
  handleErrors(err, req, res, next),
);

const run = async () => {
  await AppDataSource.initialize();
  app.listen(PORT, () => {
    console.log(`'Toucan Talent Test App' running at port ${PORT}`);
  });
};
run().then(console.log).catch(console.error);

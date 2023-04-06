import { Router } from "express";
import {  createServiceHandler, deleteServiceHandler, updateServiceHandler } from "./services-handlers";

export const servicesRouter = Router();

// Create a service
servicesRouter.post('/', createServiceHandler);

// Update a service
servicesRouter.put('/:serviceId', updateServiceHandler);

// Delete a service if this is not linked to an appointment
servicesRouter.delete('/:serviceId', deleteServiceHandler);
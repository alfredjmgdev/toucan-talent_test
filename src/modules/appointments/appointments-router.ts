import { Router } from "express";
import {  createAppointmentHandler, deleteAppointmentHandler, getAppointmentsByDateHandler, updateAppointmentHandler } from "./appointments-handlers";

export const appointmentsRouter = Router();

// Create appointment to pacient
appointmentsRouter.post('/', createAppointmentHandler);

// Update appointment
appointmentsRouter.put('/:appointmentId', updateAppointmentHandler);

// Delete appointment
appointmentsRouter.delete('/:appointmentId', deleteAppointmentHandler);

// Get a patient appointments report by date
appointmentsRouter.get('/report/:patientId', getAppointmentsByDateHandler);
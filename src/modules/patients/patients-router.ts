import { Router } from "express";
import { activateOrDesactivatePatientHandler, createPatientHandler, deletePatientHandler, getPatientInformationHandler, updatePatientHandler } from "./patients-handlers";

export const patientsRouter = Router();

// Create a patient
patientsRouter.post('/', createPatientHandler);

// Get patient information
patientsRouter.get('/:patientId', getPatientInformationHandler);

// Update a patient
patientsRouter.put('/:patientId', updatePatientHandler);

// Activate or desactivate a patient
patientsRouter.put('/active-status/:patientId', activateOrDesactivatePatientHandler);

// Delete a patient without appointments
patientsRouter.delete('/:patientId', deletePatientHandler);
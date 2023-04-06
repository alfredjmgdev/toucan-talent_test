import { ServicesTypeValues } from './../../entities/Service';
import * as yup from 'yup';

export const createServicesSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required().positive(),
  type: yup.mixed<ServicesTypeValues>().oneOf(Object.values(ServicesTypeValues)),
});

export const updateServicesSchema = yup.object().shape({
  name: yup.string(),
  price: yup.number().positive(),
  type: yup.mixed<ServicesTypeValues>().oneOf(Object.values(ServicesTypeValues)),
});
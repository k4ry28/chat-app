import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
  APP_URL: Joi.string().required(),
  APP_PORT: Joi.number().default(3000).required(),
  SOCKET_URL: Joi.string().required(),
  SOCKET_PORT: Joi.number().default(3001).required(),
});

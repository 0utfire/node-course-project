const Joi = require('joi');
const { EMAIL } = require('../config/regex.enum');

module.exports = Joi.object({
    email: Joi.string()
        .regex(EMAIL)
        .trim()
        .required()
        .messages({
            'string.pattern.base': 'Email must look like email@domain.com',
            'string.empty': 'Email is required'
        }),
    password: Joi.string()
        .trim()
        .required()
        .messages({
            'string.empty': 'Password is required'
        })
});

const Joi = require('joi');
const { EMAIL, PASSWORD } = require('../config/regex.enum');

module.exports = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(60)
        .trim()
        .required()
        .messages({
            'string.alphanum': 'Name allows only letters and digits',
            'string.min': 'Name must have at least 3 symbols',
            'string.empty': 'Name is required'
        }),
    email: Joi.string()
        .regex(EMAIL)
        .trim()
        .required()
        .messages({
            'string.pattern.base': 'Email must look like email@domain.com',
            'string.empty': 'Email is required'
        }),
    password: Joi.string()
        .regex(PASSWORD)
        .trim()
        .required()
        .messages({
            'string.pattern.base': 'Password must have minimum 8 symbols and contain capital letter, small letter and digit',
            'string.empty': 'Password is required'
        })
});

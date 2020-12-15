const Joi = require('joi');
const { EMAIL, PASSWORD } = require('../config/regex.enum');

module.exports = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(60)
        .trim()
        .messages({
            'string.alphanum': 'Name allows only letters and digits',
            'string.min': 'Name must have at least 3 symbols',
        }),
    email: Joi.string()
        .regex(EMAIL)
        .trim()
        .messages({
            'string.pattern.base': 'Email must look like email@domain.com',
        }),
    password: Joi.string()
        .regex(PASSWORD)
        .trim()
        .messages({
            'string.pattern.base': 'Password must have minimum 8 symbols and contain capital letter, small letter and digit',
        })
});

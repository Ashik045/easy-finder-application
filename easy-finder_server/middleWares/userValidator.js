const { check } = require('express-validator');
const createError = require('http-errors');

const User = require('../model/people');

const addUserValidator = [
    check('email')
        .isEmail()
        .withMessage('invalid email address')
        .trim()
        .custom(async (value) => {
            try {
                const user = await User.findOne({ email: value });
                if (user) {
                    throw createError('Email already exist');
                }
            } catch (err) {
                throw createError(err.message);
            }
        }),

    check('password')
        .isStrongPassword()
        .withMessage('pass must be 8 charecters long. suggest(@#as34asd$)'),

    check('firstName')
        .isLength({ min: 1 })
        .withMessage('firstName is required')
        .isAlpha('en-US', { ignore: ' -' })
        .withMessage('firstname must not contain anything other then alpha')
        .trim(),

    check('lastName')
        .isLength({ min: 1 })
        .withMessage('lastName is required')
        .isAlpha('en-US', { ignore: ' -' })
        .withMessage('lastName must not contain anything other then alpha')
        .trim(),
];

module.exports = addUserValidator;

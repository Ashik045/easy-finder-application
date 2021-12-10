/* eslint-disable no-underscore-dangle */
// external imoprt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// internal import
const User = require('../model/people');

async function loginController(req, res, next) {
    try {
        const userr = await User.find({ email: req.body.email });
        if (userr && userr.length > 0) {
            const isValidPass = await bcrypt.compare(req.body.password, userr[0].password);

            if (isValidPass) {
                // token
                const token = jwt.sign(
                    {
                        email: userr[0].email,
                        userId: userr[0]._id,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '1d',
                    },
                );

                res.status(200).json({
                    access_token: token,
                    message: 'login successfull',
                });
            } else {
                res.status(401).json({
                    error: 'Authentiacation failed!!!!',
                });
            }
        } else {
            res.status(401).json({
                error: 'Authentiacation failed!',
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
}

module.exports = loginController;

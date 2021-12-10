const bcrypt = require('bcrypt');

const User = require('../model/people');

async function addUser(req, res, next) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
        ...req.body,
        password: hashedPassword,
    });

    try {
        // eslint-disable-next-line no-unused-vars
        const result = await newUser.save();
        res.status(200).json({
            message: 'user added successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    addUser,
};

const mongoose = require('mongoose');

const PeopleSchema = mongoose.Schema(
    {
        email: {
            type: String,
            require: true,
            trim: true,
        },
        password: {
            type: String,
            require: true,
        },
        firstName: {
            type: String,
            require: true,
            trim: true,
        },
        lastName: {
            type: String,
            require: true,
            trim: true,
        },
        agree: {
            type: String,
            require: true,
        },
        country: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

const People = mongoose.model('People', PeopleSchema);

module.exports = People;

//! hacer el import

const mongoose = require('mongoose');

module.exports = mongoose.model(Users, {
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String
});

// definimos la configuracion del schema de mongo
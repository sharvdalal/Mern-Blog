const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        min:4,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    }

});

const UserModel = mongoose.model('User', UserScheme);

module.exports = UserModel;
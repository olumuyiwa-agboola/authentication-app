const mogoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: True
    },
    lastName: {
        type: String,
        required: True
    },
    email: {
        type: String,
        required: True
    },
    password: {
        type: String,
        required: True
    },
    date: {
        type: Date,
        default: Date.Now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
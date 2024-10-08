const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    surname: { type: String, required: true }
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);

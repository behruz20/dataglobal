const User = require('../models/User');

// Create a new user
const createUser = async (req, res) => {
    const { name, age, surname } = req.body;

    if (!name || !age || !surname) {
        return res.status(400).json({ message: 'Bad Request: Missing data' });
    }

    try {
        const newUser = new User({ name, age, surname });
        await newUser.save();
        res.status(201).json({ data: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ data: users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Export functions
module.exports = { createUser, getUsers };

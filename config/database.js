const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://itfrontuchun:sadulla2009@cluster0.wdv8x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://ubaydullayevamuxlisa1:sadu11a2009@cluster0.6dms8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

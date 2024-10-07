const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://itfrontuchunn:sadu11a2009@cluster0.6dms8.mongodb.net/<dbname>?retryWrites=true&w=majority');
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

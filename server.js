const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const userRoutes = require('./routes/users');

const ApiUrl = express();

// Connect to MongoDB
connectDB();

// Middleware
ApiUrl.use(cors());
ApiUrl.use(express.json());

// Routes
ApiUrl.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5001; // Use environment port if available
ApiUrl.listen(PORT, () => {
    console.log(`Your API is running on port ${PORT}`);
});

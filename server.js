const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const userRoutes = require('./routes/users');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5001; // Use environment port if available
app.listen(PORT, () => {
    console.log(`Your API is running on port ${PORT}`);
});

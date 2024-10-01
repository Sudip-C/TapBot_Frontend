const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/UserRoutes');
const bot = require('./bot');
const cors=require('cors')
dotenv.config();

const app = express();
app.use(cors());
// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
app.use('/user', userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

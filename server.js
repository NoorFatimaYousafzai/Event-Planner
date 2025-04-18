require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

connectDB();

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/user', userRoutes);
app.use('/api/event', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
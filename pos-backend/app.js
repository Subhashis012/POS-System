require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const config = require('./config/config');
const globalErrorHandler = require('./middleware/globalErrorHandler');
const createHttpError = require('http-errors');

const app = express();

const PORT = config.port;
connectDB();

// Root EndPoint
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

// Global Error Handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
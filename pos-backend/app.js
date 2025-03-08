require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const config = require('./config/config');
const globalErrorHandler = require('./middleware/globalErrorHandler');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express();

const PORT = config.port;
connectDB();

// Middlewares
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']
}));
app.use(express.json()); // parse incoming request body in json format
app.use(cookieParser());


// Root EndPoint
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

// Other EndPoints
app.use("/api/user", require('./routes/userRoute'));
app.use("/api/order",require("./routes/orderRoute"));
app.use("/api/table",require("./routes/tableRoute"));

// Global Error Handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
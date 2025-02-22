
const createHttpError = require("http-errors");
const User = require("../models/userModel");

const register = async (req, res, next) => {
    try {

        const { name, phone, email, password, role } = req.body;

        // First check if all the fields are filled
        if (!name || !phone || !email || !password || !role) {
            const error = createHttpError(400, "Please fill all the fields");
            next(error);
        }

        // Check if the user already exists
        const isUserPresents = await User.findOne({ email });
        if (isUserPresents) {
            const error = createHttpError(400, "User already exists");
            next(error);
        }

        // Create a new user
        const user = {name,phone,email,password,role};
        const newUser = User(user);
        await newUser.save();

        res.status(201).json({success: true, message: "User created successfully", data: newUser});

        
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {

}

module.exports = {
    register,
    login
}
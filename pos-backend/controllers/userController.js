const createHttpError = require("http-errors");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

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
    const user = { name, phone, email, password, role };
    const newUser = User(user);
    await newUser.save();

    res
      .status(201)
      .json({
        success: true,
        message: "User created successfully",
        data: newUser,
      });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // First check if all the fields are filled
    if (!email || !password) {
      const error = createHttpError(400, "Please fill all the fields");
      next(error);
    }

    // Check if the user exists
    const isUserPresents = await User.findOne({ email });
    if (!isUserPresents) {
      const error = createHttpError(401, "Invalid credentials");
      return next(error);
    }
    
    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, isUserPresents.password);

    if (isMatch == false) {
      const error = createHttpError(401, "Invalid credentials");
      return next(error);
    }

    // Check the access token
    const accessToken = jwt.sign(
      { _id: isUserPresents._id },
      config.accessTokenSecret,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res
      .status(200)
      .json({
        success: true,
        message: "User logged in successfully",
        data: isUserPresents,
      });
  } catch (error) {
    next(error);
  }
};

const getUserData = async (req, res, next) => {};

module.exports = {
  register,
  login,
  getUserData,
};

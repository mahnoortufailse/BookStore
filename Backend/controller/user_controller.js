import User from "../model/user_model.js";
import bcryptjs from "bcryptjs";
import { catchAsync } from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
// Register User Function
export const RegisterUser = catchAsync(async (req, res, next) => {
  const { fullname, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return  next(new AppError(`User Already exist` , 400));;
  }
  const hashPassword = await bcryptjs.hash(password, 10);
  const createdUser = new User({
    fullname: fullname,
    email: email,
    password: hashPassword,
  });
  await createdUser.save();
  res.status(201).json({
    message: "User created successfully",
    user: {
      _id: createdUser._id,
      fullname: createdUser.fullname,
      email: createdUser.email,
    },
  });
});

// Login User Function
export const LoginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return  next(new AppError(`Invalid User Or password` , 404));
  }
  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    return next(new AppError(`Invalid User Or password` , 404));
  }
  res.status(200).json({
    message: "Login successful",
    user: {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
    },
  });
});

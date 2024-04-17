import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const register = async (userDetails) => {
    const hashedPassword = await bcrypt.hash(userDetails.password, 10);
    const user = new User({
        username: userDetails.username,
        password: hashedPassword,
    });
    await user.save();
    return user;
};

export const userService = { register };
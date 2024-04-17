import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async ({ username, password }) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error("User not found!");
    }

    const matches = await bcrypt.compare(password, user.password);
    if (!matches) {
        throw new Error("Invalid password!");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: 86400 });

    return { user, token }; 
};

export const userService = { login };
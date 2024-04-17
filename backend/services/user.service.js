import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

const changePassword = async (userId, oldPassword, newPassword) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const matches = await bcrypt.compare(oldPassword, user.password);
    if (!matches) {
        throw new Error('Old password is incorrect')
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    return user;
};

export const userService = { changePassword };
import { userService } from "../services/login.service.js";

export const loginController = async (req, res) => {
    try {
        const { user, token } = await userService.login(req.body);
        res.status(200).send({ message: `Login successful!`, user, token });
    } catch (err) {
        res.status(400).send(err.message);
    }
};
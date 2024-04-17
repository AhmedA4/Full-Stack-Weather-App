import { userService } from "../services/register.service.js";

export const registerController = async (req, res) => {
    try {
        const user = await userService.register(req.body);
        res.status(201).send({ message: `Registration successful!`, user});
    } catch (err) {
        res.status(400).send(err.message);
    }
};
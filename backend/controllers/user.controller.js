import { userService } from "../services/user.service.js";
import { favService } from "../services/favourites.service.js";

export const changePassword = async (req, res) => {
    try {
        const { userId } = req;
        const { oldPassword, newPassword } = req.body;

        await userService.changePassword(userId, oldPassword, newPassword);

        res.status(200).send({ message: `Password change successful` });
    } catch (err) {
        res.status(400).send(err.message)
    }
};

export const getFavouriteLocations = async (req, res) => {
    try {
        const userId = req.userId;
        const favourites = await favService.getFavouriteLocations(userId);

        res.status(200).send({ favourites });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export const addFavouriteLocation = async (req, res) => {
    try {
        const userId = req.userId;
        const { location } = req.body;

        const favourites = await favService.addFavouriteLocation(userId, location);

        res.status(200).send({ message: "Location successfully added", favourites });
    } catch (err) {
        res.status(400).send(err.message);
    }
};

export const removeFavouriteLocation = async (req, res) => {
    try {
        const userId = req.userId;
        const { location } = req.body;

        const favourites = await favService.removeFavouriteLocation(userId, location);

        res.status(200).send({ message: "Location successfully removed", favourites });
    } catch (err) {
        res.status(400).send(err.message);
    }
};
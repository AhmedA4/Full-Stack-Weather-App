import express from "express";
import verifyToken from "../middleware/authJWT.js";
import { changePassword } from "../controllers/user.controller.js";
import { getFavouriteLocations } from "../controllers/user.controller.js";
import { addFavouriteLocation } from "../controllers/user.controller.js";
import { removeFavouriteLocation } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.route(`/change-password`).post(verifyToken, changePassword);

userRouter.route(`/favourites`).get(verifyToken, getFavouriteLocations);

userRouter.route(`/favourites/add`).post(verifyToken, addFavouriteLocation);

userRouter.route(`/favourites/remove`).post(verifyToken, removeFavouriteLocation);

export default userRouter;
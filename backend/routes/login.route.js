import express from "express";
import verifyToken from "../middleware/authJWT.js";

import { loginController } from "../controllers/login.controller.js";

const loginRouter = express.Router();

loginRouter.route(`/`).post(loginController);

export default loginRouter;
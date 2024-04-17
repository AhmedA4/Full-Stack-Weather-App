import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import registerRouter from "./routes/register.route.js";
import loginRouter from "./routes/login.route.js";
import userRouter from "./routes/user.route.js";

config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());

app.use(cors());

app.use(`/register`, registerRouter);

app.use(`/login`, loginRouter);

app.use(`/user`, userRouter);

try {
    console.log(`Connecting to the database @ ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
    console.log(`Connected to the database @ ${process.env.DB_URI}`);
} catch (err) {
    console.log(err);
}

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`)
})

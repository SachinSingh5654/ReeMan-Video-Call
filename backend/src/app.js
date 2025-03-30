import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envResult = dotenv.config({ path: path.resolve(__dirname, '.env') });

import express from "express";

import {createServer} from "node:http";
import {Server} from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));



app.use("/api/v1/users", userRoutes);

const start = async () =>{

    const mongoURL = process.env.MONGODBURL;
    const connectionDb = await mongoose.connect(mongoURL);

    console.log(`MONGO connected DB Host ${connectionDb.connection.host}`);
    server.listen(app.get("port"), ()=>{
        console.log("LISTENING TO PORT 8000");
    });
};


start();
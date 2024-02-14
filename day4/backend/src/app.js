import  express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();
app.use(cors(
    {credentials:true,
    origin:"http://localhost:5173"}
    ));
app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended:true,limit:"20kb"}));
app.use(cookieParser());

import noteRouter from "./routes/noteRouter.js";
app.use("/api/v1/notes",noteRouter);


export default app;


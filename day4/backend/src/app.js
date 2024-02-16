import  express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import NodeCache from "node-cache";


const app=express();
app.use(cors(
    {credentials:true,
    origin:"http://localhost:5173"}
    ));
app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended:true,limit:"20kb"}));
app.use(cookieParser());

import noteRouter from "./routes/noteRouter.js";
import adminDashBoard from "./routes/productdashRouter/userRouter.js";

app.use("/api/v1/notes",noteRouter);
app.use("/api/v1/admindash",adminDashBoard);

import productRouter from "./routes/productdashRouter/productRouter.js";
app.use("/api/v1/product",productRouter);

import orderRouter from "./routes/productdashRouter/orderRouter.js";
app.use("/api/v1/orders",orderRouter)

export const myCache = new NodeCache();
export default app;


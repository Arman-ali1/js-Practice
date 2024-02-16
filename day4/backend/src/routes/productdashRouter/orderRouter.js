import express from 'express';
import { newOrder } from '../../controller/productsDash/order.js';

const app=express();

// route - /api/v1/order/neworder
app.post("/neworder", newOrder);


export default app;  // export the final Express API
import express from 'express';
import { newOrder,deleteOrder,processOrder,getSingleOrder,allOrders,myOrders } from '../../controller/productsDash/order.js';

const app=express();

// route - /api/v1/order/neworder
app.post("/neworder", newOrder);

// route - /api/v1/order/deleteorders
app.delete("/deleteorders/:id", deleteOrder);

// route - /api/v1/order/processOrder
app.put("/processOrder/:id", processOrder);

// route - /api/v1/order/getSingleOrder
app.get("/getSingleOrder/:id", getSingleOrder);

// route - /api/v1/order/allOrders
app.get("/allOrders", allOrders);

// route - /api/v1/order/myOrders
app.get('/myOrders', myOrders)

export default app;  // export the final Express API
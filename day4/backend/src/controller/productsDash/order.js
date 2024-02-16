// import { Request } from "express";
// import { TryCatch } from "../middlewares/error.js";
// import { NewOrderRequestBody } from "../types/types.js";
// import { Order } from "../models/order.js";
import { reduceStock } from "../../utils/features.js";
// import ErrorHandler from "../utils/utility-class.js";
// import { myCache } from "../app.js";
import {Order} from "../../Models/productdashbord/order.js";
import { asyncHandler } from "../../utils/ayncHandler.js";

// export const myOrders = asyncHandler(async (req, res, next) => {
//   const { id: user } = req.query;

//   const key = `my-orders-${user}`;

//   let orders = [];

//   // if (myCache.has(key)) orders = JSON.parse(myCache.get(key) as string);
//   // else {
//     orders = await Order.find({ user });
//     // myCache.set(key, JSON.stringify(orders));
//   // }
//   return res.status(200).json({
//     success: true,
//     orders,
//   });
// });

// export const allOrders = asyncHandler(async (req, res, next) => {
//   const key = `all-orders`;

//   let orders = [];

//   // if (myCache.has(key)) orders = JSON.parse(myCache.get(key) as string);
//   // else {
//     orders = await Order.find().populate("user", "name");
//     // myCache.set(key, JSON.stringify(orders));
//   // }
//   return res.status(200).json({
//     success: true,
//     orders,
//   });
// });

// export const getSingleOrder = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const key = `order-${id}`;

//   let order;

//     order = await Order.findById(id).populate("user", "name");

    
//     if(!order) return res.status(404).json({message:"Order Not Found"});

//   return res.status(200).json({
//     success: true,
//     order,
//   });
// });

const newOrder = asyncHandler(
  async (req,res, next) => {
    const {
      shippingInfo,
      orderItems,
      user,
      subtotal,
      tax,
      shippingCharges,
      discount,
      total,
    } = req.body;
    // console.log(req.body);
    console.log(orderItems);
    if (!shippingInfo || !orderItems || !user || !subtotal || !tax || !total)
      return res.status(400).json({message:"Please Enter All Fields"});

    const order = await Order.create({
      shippingInfo,
      orderItems,
      user,
      subtotal,
      tax,
      shippingCharges,
      discount,
      total,
    });

    await reduceStock(orderItems);

    return res.status(201).json({
      success: true,
      message: "Order Placed Successfully",
    });
  }
);

// export const processOrder = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;

//   const order = await Order.findById(id);

//   if (!order) return next(new ErrorHandler("Order Not Found", 404));

//   switch (order.status) {
//     case "Processing":
//       order.status = "Shipped";
//       break;
//     case "Shipped":
//       order.status = "Delivered";
//       break;
//     default:
//       order.status = "Delivered";
//       break;
//   }

//   await order.save();

//   invalidateCache({
//     product: false,
//     order: true,
//     admin: true,
//     userId: order.user,
//     orderId: String(order._id),
//   });

//   return res.status(200).json({
//     success: true,
//     message: "Order Processed Successfully",
//   });
// });

// export const deleteOrder = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;

//   const order = await Order.findById(id);
//   if (!order) return next(new ErrorHandler("Order Not Found", 404));

//   await order.deleteOne();

//   invalidateCache({
//     product: false,
//     order: true,
//     admin: true,
//     userId: order.user,
//     orderId: String(order._id),
//   });

//   return res.status(200).json({
//     success: true,
//     message: "Order Deleted Successfully",
//   });
// });


export {newOrder}
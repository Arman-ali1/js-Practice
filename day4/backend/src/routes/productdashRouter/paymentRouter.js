import express from 'express';
const app=express();

import { newCoupon,applyDiscount,allCoupons,deleteCoupon } from "../../controller/productsDash/payment.js";

// route - /api/v1/payment/create--createPaymentIntent

// route - /api/v1/payment/coupon/new
app.post("/newcoupon",newCoupon);

// route - /api/v1/payment/coupon/apply
app.get("/applydiscount",applyDiscount);

// route - /api/v1/payment/coupon/all
app.get('/coupons', allCoupons);

// route - /api/v1/delete/coupon/:id
app.delete('/deletecoupon/:id', deleteCoupon);



export default app;
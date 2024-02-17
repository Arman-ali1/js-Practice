
import { Coupon } from "../../Models/productdashbord/coupon.js";
import { asyncHandler } from "../../utils/ayncHandler.js";

// export const createPaymentIntent = asyncHandler(async (req, res, next) => {
//   const { amount } = req.body;

//   if (!amount) return next(new ErrorHandler("Please enter amount", 400));

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: Number(amount) * 100,
//     currency: "inr",
//   });

//   return res.status(201).json({
//     success: true,
//     clientSecret: paymentIntent.client_secret,
//   });
// });

const newCoupon = asyncHandler(async (req, res, next) => {
  const { coupon, amount } = req.body;

  if (!coupon || !amount)
    return res.status(400).json({
      success: false,
      message: "Please enter both coupon and amount",
    });

  await Coupon.create({ code: coupon, amount });

  return res.status(201).json({
    success: true,
    message: `Coupon ${coupon} Created Successfully`,
  });
});

const applyDiscount = asyncHandler(async (req, res, next) => {
  const { coupon } = req.query;

  const discount = await Coupon.findOne({ code: coupon });

  if (!discount) return res.status(400).json({success:false,message:"Invalid Coupon Code"});

  return res.status(200).json({
    success: true,
    discount: discount.amount,
  });
});

const allCoupons = asyncHandler(async (req, res, next) => {
  const coupons = await Coupon.find({});

  return res.status(200).json({
    success: true,
    coupons,
  });
});

const deleteCoupon = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const coupon = await Coupon.findByIdAndDelete(id);

  if (!coupon) 
  return res.status(400).json({ message: "Invalid Coupon ID"});

  return res.status(200).json({
    success: true,
    message: `Coupon ${coupon.code} Deleted Successfully`,
  });
});
export{newCoupon,applyDiscount,allCoupons,deleteCoupon};
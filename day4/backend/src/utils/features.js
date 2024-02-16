import mongoose, { Document } from "mongoose";
// import { myCache } from "../app.js";
import { Product } from "../Models/productdashbord/product.js";
// import { InvalidateCacheProps, OrderItemType } from "../types/types.js";





export const reduceStock = async (orderItems) => {
  console.log(orderItems.length);
  console.log("Reducing stock for the following items: ", orderItems);
  for (let i = 0; i < orderItems.length; i++) {
    const order = orderItems[i];
    const product = await Product.findById(order.productId);
    if (!product) throw new Error("Product Not Found");
    product.stock -= order.quantity;
    await product.save();
  }
};

// export const calculatePercentage = (thisMonth: number, lastMonth: number) => {
//   if (lastMonth === 0) return thisMonth * 100;
//   const percent = (thisMonth / lastMonth) * 100;
//   return Number(percent.toFixed(0));
// };

// export const getInventories = async ({
//   categories,
//   productsCount,
// }: {
//   categories: string[];
//   productsCount: number;
// }) => {
//   const categoriesCountPromise = categories.map((category) =>
//     Product.countDocuments({ category })
//   );

  // const categoriesCount = await Promise.all(categoriesCountPromise);

  // const categoryCount: Record<string, number>[] = [];

  // categories.forEach((category, i) => {
  //   categoryCount.push({
  //     [category]: Math.round((categoriesCount[i] / productsCount) * 100),
  //   });
  // });

//   return categoryCount;
// };

// interface MyDocument extends Document {
//   createdAt: Date;
//   discount?: number;
//   total?: number;
// }
// type FuncProps = {
//   length: number;
//   docArr: MyDocument[];
//   today: Date;
//   property?: "discount" | "total";
// };

// export const getChartData = ({
//   length,
//   docArr,
//   today,
//   property,
// }: FuncProps) => {
//   const data: number[] = new Array(length).fill(0);

//   docArr.forEach((i) => {
//     const creationDate = i.createdAt;
//     const monthDiff = (today.getMonth() - creationDate.getMonth() + 12) % 12;

//     if (monthDiff < length) {
//       if (property) {
//         data[length - monthDiff - 1] += i[property]!;
//       } else {
//         data[length - monthDiff - 1] += 1;
//       }
//     }
//   });

//   return data;
// };

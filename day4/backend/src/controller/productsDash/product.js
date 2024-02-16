// import { Request } from "express";

// import {
//   BaseQuery,
//   NewProductRequestBody,
//   SearchRequestQuery,
// } from "../types/types.js";
import { Product } from "../../Models/productdashbord/product.js";
import { rm } from "fs";
import { myCache } from "../../app.js";
// import { invalidateCache } from "../utils/features.js";
// import { faker } from "@faker-js/faker";
import { asyncHandler } from "../../utils/ayncHandler.js";
import { stringify } from "querystring";

// Revalidate on New,Update,Delete Product & on New Order
const getlatestProducts = asyncHandler(async (req, res, next) => {
  let products;

  // if (myCache.has("latest-products"))
    // products = JSON.parse(myCache.get("latest-products"));
  // else {
    products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
    // myCache.set("latest-products", JSON.stringify(products));
  // }

  return res.status(200).json({
    success: true,
    products,
  });
});

// ==================================get all categories=========================
// Revalidate on New,Update,Delete Product & on New Order
const getAllCategories = asyncHandler(async (req, res, next) => {
  let categories;

  // if (myCache.has("categories"))
    // categories = JSON.parse(stringify(myCache.get("categories")));
  // else {
    categories = await Product.distinct("category");
    // myCache.set("categories", JSON.stringify(categories));
  // }

  return res.status(200).json({
    success: true,
    categories,
  });
});

// // Revalidate on New,Update,Delete Product & on New Order
//==================================getAdminProducts=========================
const getAdminProducts = asyncHandler(async (req, res, next) => {
  let products;
  // if (myCache.has("all-products"))
    // products = JSON.parse(stringify(myCache.get("all-products")));
  // else {
    products = await Product.find({});
    // myCache.set("all-products", JSON.stringify(products));
  // }

  return res.status(200).json({
    success: true,
    products,
  });
});
// ======================================get single product=====================
const getSingleProduct = asyncHandler(async (req, res, next) => {
  let product;
  const id = req.params.id;
  console.log(id);
  product = await Product.findById(id);

      if(!product) return res.status(404).json({"mess":"Product Not Found"});

  // if (myCache.has(`product-${id}`))
  //   product = JSON.parse(stringify(myCache.get(`product-${id}`)));
  // else {
  //   product = await Product.findById(id);

  //   if(!product) return res.status(404).json({"mess":"Product Not Found"});

  //   myCache.set(`product-${id}`, JSON.stringify(product));
  // }

  return res.status(200).json({
    success: true,
    product,
  });
});
// ======================================new product=====================
const newProduct = asyncHandler(
  async (req,res,next) => {
    const { name, price, stock, category } = req.body;
    console.log(name, price, stock, category);
    // const photo = req.file;
    const photo = "armanali.png";
    console.log(photo);
    if (!photo) return res.status(400).json({"mess":"Please add Photo"});

    if (!name || !price || !stock || !category) {
      // rm(photo.path, () => {
      //   console.log("Deleted");
      // });

      return res.status(400).json({"mess":"Enter all field"});

    }

    await Product.create({
      name,
      price,
      stock,
      category: category.toLowerCase(),
      // photo: photo.path,
      photo
    });

    // invalidateCache({ product: true, admin: true });

    return res.status(201).json({
      success: true,
      message: "Product Created Successfully",
    });
  }
);

const updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const { name, price, stock, category, photo } = req.body;
  // const photo = req.file;
  const product = await Product.findById(id);
  // console.log(product);
  if (!product) return res.status(404).json({ mess:"Product not found" });

  // if (photo) {
  //   rm(product.photo!, () => {
  //     console.log("Old Photo Deleted");
  //   });
  if(photo)
    product.photo = photo;
  // }

  if (name) product.name = name;
  if (price) product.price = price;
  if (stock) product.stock = stock;
  if (category) product.category = category;

  await product.save();

  // invalidateCache({
  //   product: true,
  //   productId: String(product._id),
  //   admin: true,
  // });

  return res.status(200).json({
    success: true,
    message: "Product Updated Successfully",
  });
});

const deleteProduct = asyncHandler(async (req, res, next) => {
  console.log(req.params.id);
  const product = await Product.findById(req.params.id);
  if(!product) return res.status(404).json({"mess":"Product Not Found"});

  // rm(product.photo!, () => {
  //   console.log("Product Photo Deleted");
  // });

  await product.deleteOne();

  // invalidateCache({
  //   product: true,
  //   productId: String(product._id),
  //   admin: true,
  // });

  return res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});

const getAllProducts = asyncHandler(
  async (req,  res, next) => {
    // const { search, sort, category, price } = req.query;

    // const page = Number(req.query.page) || 1;
    // 1,2,3,4,5,6,7,8
    // 9,10,11,12,13,14,15,16
    // 17,18,19,20,21,22,23,24
    // const limit = Number(process.env.PRODUCT_PER_PAGE) || 8;
    // const skip = (page - 1) * limit;

    // const baseQuery: BaseQuery = {};

    // if (search)
    //   baseQuery.name = {
    //     $regex: search,
    //     $options: "i",
    //   };

    // if (price)
    //   baseQuery.price = {
    //     $lte: Number(price),
    //   };

    // if (category) baseQuery.category = category;

    // const productsPromise = Product.find(baseQuery)
    //   .sort(sort && { price: sort === "asc" ? 1 : -1 })
    //   .limit(limit)
    //   .skip(skip);

    // const [products, filteredOnlyProduct] = await Promise.all([
    //   productsPromise,
    //   Product.find(baseQuery),
    // ]);

    // const totalPage = Math.ceil(filteredOnlyProduct.length / limit);
    const products = await Product.find({});
    return res.status(200).json({
      success: true,
      products,
      // totalPage,
    });
  }
);
//==================================================================
// const generateRandomProducts = async (count: number = 10) => {
//   const products = [];

//   for (let i = 0; i < count; i++) {
//     const product = {
//       name: faker.commerce.productName(),
//       photo: "uploads\\5ba9bd91-b89c-40c2-bb8a-66703408f986.png",
//       price: faker.commerce.price({ min: 1500, max: 80000, dec: 0 }),
//       stock: faker.commerce.price({ min: 0, max: 100, dec: 0 }),
//       category: faker.commerce.department(),
//       createdAt: new Date(faker.date.past()),
//       updatedAt: new Date(faker.date.recent()),
//       __v: 0,
//     };

//     products.push(product);
//   }

//   await Product.create(products);

//   console.log({ succecss: true });
// };

// const deleteRandomsProducts = async (count: number = 10) => {
//   const products = await Product.find({}).skip(2);

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     await product.deleteOne();
//   }

//   console.log({ succecss: true });
// };
export{newProduct,getAllProducts,deleteProduct,updateProduct,getSingleProduct,getAllCategories,getAdminProducts,getlatestProducts}
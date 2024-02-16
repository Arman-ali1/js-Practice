import  express  from "express";
import { getAllProducts,newProduct,deleteProduct,getSingleProduct,updateProduct,getlatestProducts,getAllCategories,getAdminProducts } from "../../controller/productsDash/product.js";
import { singleUpload } from "../../middlewares/multer.js";


const app = express.Router();

//To Create New Product  - /api/v1/product/new
app.post("/newProduct",newProduct);

//To get all Products with filters  - /api/v1/product/all
app.get("/allProducts", getAllProducts);

//To delete a product - /api/v1/product/deleteproduct
app.delete("/deleteproduct/:id",deleteProduct);

//TO get Single Product - /api/v1/product/:id
app.get("/getSingleProduct/:id",getSingleProduct);

//To update product - /api/v1/product/updateproduct
app.put("/updateproduct/:id",updateProduct);

//To getLatestProducts - /api/v1/product/latestproducts
app.get('/latestproducts',getlatestProducts)

//To getcatogory - /api/v1/product/categories
app.get('/categories',getAllCategories)

//To Admit getall products - /api/v1/product/adminproducts
app.get('/adminproducts',getAdminProducts) // protected route
//To get last 10 Products  - /api/v1/product/latest
// app.get("/latestProduct", getlatestProducts);
export default app;
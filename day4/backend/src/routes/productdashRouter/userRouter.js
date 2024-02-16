import { Router } from "express";
import {home,newUser,getAllUsers,getUser,deleteUser } from "../../controller/productsDash/user.js";
// import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/").get(home);
router.route("/newUser").post(newUser);
router.route("/getAllUsers").get(getAllUsers);
router.route("/getUser/:id").get(getUser);
router.route('/deleteUser/:id').delete(deleteUser)
// router.route("/getCurrentUser").get(verifyJWT, getCurrentUser)





export default router;
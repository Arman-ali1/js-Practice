import { Router } from "express";
import { getCurrentUser,createStudent,createEmployee,createAdministrat,getStudents,getEmployees,getAdministrat,studentUpdate,employeeUpdate,administrationUpdate } from "../controller/noteController.js";
import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/createStudent").post(createStudent);
router.route("/createEmployee").post(createEmployee);
router.route("/createAdministrat").post(createAdministrat);

router.route("/getStudents").post(getStudents);
router.route("/getEmployees").post(getEmployees);
router.route("/getAdministrat").post(getAdministrat);

router.route("/studentUpdate").post(studentUpdate);
router.route("/employeeUpdate").post(employeeUpdate);
router.route("/administrationUpdate").post(administrationUpdate);
router.route("/getCurrentUser").get(verifyJWT, getCurrentUser)





export default router;
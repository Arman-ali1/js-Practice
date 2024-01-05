import { Router } from "express";
import { allNotes, createNote,editnote,deletenote } from "../controller/noteController.js";

const router = Router()

router.route("/allnotes").get(allNotes);

router.route("/createnote").post(createNote);
router.route("/editnote").post(editnote);
router.route("/deletenote").post(deletenote);

export default router;
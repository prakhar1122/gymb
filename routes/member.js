import membercontroller from "../controllers/member.js";
import express from "express";

const router = express.Router();

router
    .post("/add", membercontroller.addmember)
    .get("/", membercontroller.getallmember)
    .post("/update", membercontroller.updatemember)
    .post("/delete", membercontroller.delete)

export default router;
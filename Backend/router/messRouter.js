import express from "express";
import { sendMassege } from "../controller/massController.js";

const router = express.Router();

router.post("/send",sendMassege);

export default router;
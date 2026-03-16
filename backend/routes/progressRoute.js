import expresss from "express";
import { getDashboard } from "../controller/ProgressController.js";
import protect from "../middleware/auth.js";

const router = expresss.Router();

router.use(protect);

router.get("/dashboard", getDashboard);

export default router;

import { Router } from "express";
import { body } from "express-validator";
import { authenticate, requireRole } from "../middleware/auth.js";
import { listAllBookings, updateBookingStatus } from "../controllers/adminBookingController.js";

const router = Router();

router.use(authenticate, requireRole("admin"));

router.get("/", listAllBookings);
router.patch(
  "/:id",
  [body("status").isIn(["pending", "approved", "rejected", "completed"]).withMessage("Invalid status")],
  updateBookingStatus
);

export default router;

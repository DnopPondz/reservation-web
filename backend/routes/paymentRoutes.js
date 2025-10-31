import { Router } from "express";
import multer from "multer";
import { body } from "express-validator";
import { authenticate, requireRole } from "../middleware/auth.js";
import { listPayments, recordPayment, verifyPayment } from "../controllers/paymentController.js";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.use(authenticate);

router.get("/", requireRole("admin"), listPayments);
router.post(
  "/",
  upload.single("slip"),
  [
    body("bookingId").notEmpty().withMessage("Booking is required"),
    body("method").isIn(["QR", "bank"]).withMessage("Invalid method"),
    body("amount").isFloat({ min: 0 }).withMessage("Amount must be positive"),
  ],
  recordPayment
);
router.post("/:id/verify", requireRole("admin"), verifyPayment);

export default router;

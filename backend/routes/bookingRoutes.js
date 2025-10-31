import { Router } from "express";
import { body } from "express-validator";
import { authenticate } from "../middleware/auth.js";
import { createBooking, listBookings } from "../controllers/bookingController.js";

const router = Router();

router.use(authenticate);

router.get("/", listBookings);
router.post(
  "/",
  [
    body("serviceId").notEmpty().withMessage("Service is required"),
    body("date").isISO8601().withMessage("Valid date required"),
    body("time").notEmpty().withMessage("Time required"),
  ],
  createBooking
);

export default router;

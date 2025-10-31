import { Router } from "express";
import { body } from "express-validator";
import { login, logout, register } from "../controllers/authController.js";

const router = Router();

router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  login
);

router.post("/logout", logout);

export default router;

import { Router } from "express";
import { body } from "express-validator";
import { authenticate, requireRole } from "../middleware/auth.js";
import { deleteUser, getProfile, listUsers, updateProfile, updateUser } from "../controllers/userController.js";

const router = Router();

router.use(authenticate);

router.get("/me", getProfile);
router.put(
  "/me",
  [
    body("name").notEmpty().withMessage("Name required"),
    body("email").isEmail().withMessage("Valid email required"),
  ],
  updateProfile
);

router.get("/", requireRole("admin"), listUsers);
router.put("/:id", requireRole("admin"), updateUser);
router.delete("/:id", requireRole("admin"), deleteUser);

export default router;

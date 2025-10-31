import { Router } from "express";
import { body } from "express-validator";
import { authenticate, requireRole } from "../middleware/auth.js";
import { createService, deleteService, listServices, updateService } from "../controllers/serviceController.js";

const router = Router();

router.get("/", listServices);

router.use(authenticate, requireRole("admin"));

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name required"),
    body("price").isFloat({ min: 0 }).withMessage("Price must be positive"),
  ],
  createService
);
router.put(
  "/:id",
  [body("price").optional().isFloat({ min: 0 }).withMessage("Price must be positive")],
  updateService
);
router.delete("/:id", deleteService);

export default router;

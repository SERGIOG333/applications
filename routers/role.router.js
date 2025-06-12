import { Router } from "express";
import RoleController from '../controllers/role.controller.js';
import { verifyToken } from '../middleware/authMiddleware.js';
const router= Router();
const name='/role';
// Public route

router.route(name)
.post(RoleController.register)
.get(verifyToken,RoleController.show);


router.route(`${name}/:id`)

 .get(RoleController.findById)
 .put(RoleController.update)
 .delete(RoleController.delete);

export default router;
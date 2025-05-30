import { Router } from "express";
import { showMysql } from "../controllers/testMysql.controller.js";

const router = Router();
const apiName = '/testMysql';

router.route(apiName)
  .get(showMysql);

export default router;
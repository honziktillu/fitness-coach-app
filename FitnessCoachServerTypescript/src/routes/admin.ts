import express from "express";

import { verify } from "../service/auth";

const router = express.Router();

import * as adminController from "../controllers/admin";

router.get("/test", verify, adminController.testFunction);

module.exports = router;

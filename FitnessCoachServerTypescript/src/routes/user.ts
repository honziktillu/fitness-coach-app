import express from "express";
import { login, refresh } from "../service/auth";

const router = express.Router();

import * as userController from "../controllers/user";

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.post("/", userController.createUser);

router.post("/login", userController.loginUser, login);

router.post("/refresh", refresh);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

//router.post("/", userController.addFriend);

module.exports = router;

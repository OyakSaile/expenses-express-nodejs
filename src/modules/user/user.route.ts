import { Router } from "express";
import { userController } from ".";

export const userRouter = Router();

userRouter.get("/user/:email", userController.findByEmail.bind(userController));
userRouter.post("/user/", userController.create.bind(userController));

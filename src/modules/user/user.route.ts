import { Router } from "express";
import { userController } from ".";

export const userRouter = Router();

userRouter.use("/user", (req, res) => {
  return userController.create(req, res);
});

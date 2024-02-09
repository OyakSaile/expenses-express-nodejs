import { Router } from "express";

export const userRouter = Router();

userRouter.use("/user", (req, res) => {
  res.send("User route");
});

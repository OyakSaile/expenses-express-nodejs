import express from "express";
import "dotenv/config";
import { env } from "./env";
import routes from "./routes";

const app = express();

app.use(routes.publicRoutes);
app.use(routes.privateRoutes);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});

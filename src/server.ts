import "dotenv/config";
import express from "express";
import "express-async-errors";
import { env } from "./env";
import { errorMiddleware } from "./middlewares/error.middleware";
import routes from "./routes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes.publicRoutes);
app.use(routes.privateRoutes);

//Middlewares
app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});

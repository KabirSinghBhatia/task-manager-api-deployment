if (process.env.NODE_ENV !== "production") {
  const envFile =
    process.env.NODE_ENV === "test" ? `./config/.env.test` : "./config/.env";
  require("dotenv").config({ path: envFile });
}

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(taskRouter);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;

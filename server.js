import express from "express";

const app = express();

app.use(express.json());

const routes = express.Router();

routes.get("api/teste", (req, res) =>
  res.status(200).json({ message: "hello world" })
);

app.use(routes);

app.listen("3333", () => console.log("online"));

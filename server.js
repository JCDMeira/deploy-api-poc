import express from "express";

const app = express();

app.use(express.json());

const router = express.Router();

router.get("api/teste", (req, res) =>
  res.status(200).json({ message: "hello world" })
);

app.use(router);
app.use(`/.netlify/functions/server`, router);

app.listen("3333", () => console.log("online"));

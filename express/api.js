import express from "express";
import servless from "serverless-http";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", (req, res) => res.status(200).json({ message: "Hello world" }));

app.use("/api/teste", (req, res) =>
  res.status(200).json({ message: "testando" })
);

export default app;
export const handler = servless(app);

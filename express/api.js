import express from "express";
import servless from "serverless-http";
import cors from "cors";

const app = express();
app.use("/", (req, res) => res.status(200).json({ message: "Hello world" }));

export default app;
export const handler = servless(app);

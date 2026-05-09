import express from "express";
import cors from "cors";
import { cardRouter } from "./routes/card.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/cards", cardRouter);
app.get("/api/health", (_, res) => res.json({ status: "ok" }));

app.listen(4000, () => console.log("API em execução na porta 4000"));

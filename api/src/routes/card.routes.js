import { Router } from "express";
import { createCardRequest, listCardRequests } from "../controllers/card.controller.js";

export const cardRouter = Router();
cardRouter.get("/", listCardRequests);
cardRouter.post("/", createCardRequest);

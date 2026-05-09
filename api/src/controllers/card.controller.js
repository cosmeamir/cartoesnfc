import crypto from "node:crypto";

const fakeDb = [];

export function createCardRequest(req, res) {
  const request = { id: crypto.randomUUID(), ...req.body, status: "pending", createdAt: new Date().toISOString() };
  fakeDb.push(request);
  res.status(201).json(request);
}

export function listCardRequests(_, res) {
  res.json(fakeDb);
}

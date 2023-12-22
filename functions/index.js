const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// Listen commmand
exports.api = functions.https.onRequest(app);

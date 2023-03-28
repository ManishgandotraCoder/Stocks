import express from "express";

export const cryptorouter = express.Router();
import * as controller from "../controllers/main-controller"
import * as middleware from "../middlewares"
import passport from "passport"

cryptorouter.get('/getCrypto/:currency',
    controller.crypto.getAllCrypto
)
cryptorouter.post('/getCryptoGraph',
    controller.crypto.getCryptoGraph
)
cryptorouter.get('/getCryptoDetails/:coin',
    controller.crypto.getCryptoDetails
)



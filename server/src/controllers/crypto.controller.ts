import { Response, Request, NextFunction } from "express";
import { helper } from '../helpers/response-helper';
import * as express from "express";
import { msg } from "../helpers/messages"

import * as dotenv from "dotenv";
import axios from 'axios';


dotenv.config();

export class CryptoController {
    async getAllCrypto(req: Request, res: express.Response, next: NextFunction) {
        try {
            const base_url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${req.params.currency}&order=market_cap_desc&per_page=${req.query.limit}&page=${req.query.page}&sparkline=false`
            let data = await axios.get(base_url)
            helper.success(res, msg.FETCHED_CRYPTO_CURRENCIES, data.data)
        } catch (e) {
            console.log(e);
            
            helper.server_error(res, msg.SERVER_ERROR, null)
        }
    }
    async getCryptoGraph(req: Request, res: express.Response, next: NextFunction) {
        try {
            const { currency, days, coin } = req.body
            const base_url = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}`
            let data = await axios.get(base_url)
            helper.success(res, msg.FETCHED_CRYPTO_GRAPHS, data.data)
        } catch (e) {

            helper.server_error(res, msg.SERVER_ERROR, null)
        }
    }
    async getCryptoDetails(req: Request, res: express.Response, next: NextFunction) {
        try {
            const { coin } = req.params
            const base_url = `https://api.coingecko.com/api/v3/coins/${coin}`
            let data = await axios.get(base_url)
            helper.success(res, msg.FETCHED_CRYPTO_GRAPHS, data.data)
        } catch (e) {

            helper.server_error(res, msg.SERVER_ERROR, null)
        }
    }
}


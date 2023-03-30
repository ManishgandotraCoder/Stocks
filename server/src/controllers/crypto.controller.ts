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
            // let data = await axios.get(base_url)
            helper.success(res, msg.FETCHED_CRYPTO_CURRENCIES,  [
                {
                    "id": "bitcoin",
                    "symbol": "btc",
                    "name": "Bitcoin",
                    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
                    "current_price": 1,
                    "market_cap": 19332506,
                    "market_cap_rank": 1,
                    "fully_diluted_valuation": 21000000,
                    "total_volume": 769056,
                    "high_24h": 1,
                    "low_24h": 1,
                    "price_change_24h": 0,
                    "price_change_percentage_24h": 0,
                    "market_cap_change_24h": 950,
                    "market_cap_change_percentage_24h": 0.00491,
                    "circulating_supply": 19332506,
                    "total_supply": 21000000,
                    "max_supply": 21000000,
                    "ath": 1.003301,
                    "ath_change_percentage": -0.32896,
                    "ath_date": "2019-10-15T16:00:56.136Z",
                    "atl": 0.99895134,
                    "atl_change_percentage": 0.10498,
                    "atl_date": "2019-10-21T00:00:00.000Z",
                    "roi": null,
                    "last_updated": "2023-03-30T16:57:07.315Z"
                },
                {
                    "id": "ethereum",
                    "symbol": "eth",
                    "name": "Ethereum",
                    "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
                    "current_price": 0.06323478,
                    "market_cap": 7616848,
                    "market_cap_rank": 2,
                    "fully_diluted_valuation": 7616848,
                    "total_volume": 373608,
                    "high_24h": 0.06376548,
                    "low_24h": 0.06231016,
                    "price_change_24h": -0.000339469948009846,
                    "price_change_percentage_24h": -0.53397,
                    "market_cap_change_24h": -40227.78778122179,
                    "market_cap_change_percentage_24h": -0.52537,
                    "circulating_supply": 120448797.976576,
                    "total_supply": 120448797.976576,
                    "max_supply": null,
                    "ath": 0.1474984,
                    "ath_change_percentage": -57.07109,
                    "ath_date": "2017-06-12T00:00:00.000Z",
                    "atl": 0.00160204,
                    "atl_change_percentage": 3852.41692,
                    "atl_date": "2015-10-20T00:00:00.000Z",
                    "roi": {
                        "times": 83.54525352853238,
                        "currency": "btc",
                        "percentage": 8354.525352853238
                    },
                    "last_updated": "2023-03-30T16:57:00.614Z"
                },
                {
                    "id": "tether",
                    "symbol": "usdt",
                    "name": "Tether",
                    "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
                    "current_price": 0.0000354,
                    "market_cap": 2819018,
                    "market_cap_rank": 3,
                    "fully_diluted_valuation": 2819018,
                    "total_volume": 1185203,
                    "high_24h": 0.00003555,
                    "low_24h": 0.00003435,
                    "price_change_24h": -5.734837245e-9,
                    "price_change_percentage_24h": -0.0162,
                    "market_cap_change_24h": 8825,
                    "market_cap_change_percentage_24h": 0.31405,
                    "circulating_supply": 79640898253.3991,
                    "total_supply": 79640898253.3991,
                    "max_supply": null,
                    "ath": 0.0051026,
                    "ath_change_percentage": -99.30597,
                    "ath_date": "2015-02-25T00:00:00.000Z",
                    "atl": 0.00001457,
                    "atl_change_percentage": 143.00142,
                    "atl_date": "2021-11-10T17:47:29.153Z",
                    "roi": null,
                    "last_updated": "2023-03-30T16:55:01.755Z"
                },
                {
                    "id": "binancecoin",
                    "symbol": "bnb",
                    "name": "BNB",
                    "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
                    "current_price": 0.01114196,
                    "market_cap": 1760265,
                    "market_cap_rank": 4,
                    "fully_diluted_valuation": 2229662,
                    "total_volume": 28658,
                    "high_24h": 0.01119121,
                    "low_24h": 0.01088596,
                    "price_change_24h": -0.000026950141926165,
                    "price_change_percentage_24h": -0.2413,
                    "market_cap_change_24h": -2407.09912199853,
                    "market_cap_change_percentage_24h": -0.13656,
                    "circulating_supply": 157895234,
                    "total_supply": 157900174,
                    "max_supply": 200000000,
                    "ath": 0.01916831,
                    "ath_change_percentage": -41.77907,
                    "ath_date": "2022-11-27T02:54:58.041Z",
                    "atl": 0.00000699,
                    "atl_change_percentage": 159556.1631,
                    "atl_date": "2017-10-19T00:00:00.000Z",
                    "roi": null,
                    "last_updated": "2023-03-30T16:56:59.614Z"
                },
                {
                    "id": "usd-coin",
                    "symbol": "usdc",
                    "name": "USD Coin",
                    "image": "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
                    "current_price": 0.00003537,
                    "market_cap": 1166912,
                    "market_cap_rank": 5,
                    "fully_diluted_valuation": 1166552,
                    "total_volume": 168615,
                    "high_24h": 0.00003552,
                    "low_24h": 0.00003436,
                    "price_change_24h": 1.248e-9,
                    "price_change_percentage_24h": 0.00353,
                    "market_cap_change_24h": -9410.550702258712,
                    "market_cap_change_percentage_24h": -0.8,
                    "circulating_supply": 32982925340.3743,
                    "total_supply": 32972758173.1643,
                    "max_supply": null,
                    "ath": 0.00033582,
                    "ath_change_percentage": -89.46275,
                    "ath_date": "2018-12-08T12:54:40.339Z",
                    "atl": 0.00001457,
                    "atl_change_percentage": 142.79071,
                    "atl_date": "2021-11-10T17:58:58.999Z",
                    "roi": null,
                    "last_updated": "2023-03-30T16:57:00.387Z"
                },
                {
                    "id": "ripple",
                    "symbol": "xrp",
                    "name": "XRP",
                    "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
                    "current_price": 0.00001896,
                    "market_cap": 976223,
                    "market_cap_rank": 6,
                    "fully_diluted_valuation": 1889043,
                    "total_volume": 127375,
                    "high_24h": 0.00001959,
                    "low_24h": 0.00001849,
                    "price_change_24h": -2.00765446833e-7,
                    "price_change_percentage_24h": -1.04792,
                    "market_cap_change_24h": -13223.24664970371,
                    "market_cap_change_percentage_24h": -1.33643,
                    "circulating_supply": 51678187732,
                    "total_supply": 99989057196,
                    "max_supply": 100000000000,
                    "ath": 0.00022465,
                    "ath_change_percentage": -91.52607,
                    "ath_date": "2017-05-17T00:00:00.000Z",
                    "atl": 0.00000438,
                    "atl_change_percentage": 334.66834,
                    "atl_date": "2017-03-01T00:00:00.000Z",
                    "roi": null,
                    "last_updated": "2023-03-30T16:57:02.135Z"
                },
                {
                    "id": "cardano",
                    "symbol": "ada",
                    "name": "Cardano",
                    "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
                    "current_price": 0.00001329,
                    "market_cap": 466054,
                    "market_cap_rank": 7,
                    "fully_diluted_valuation": 598442,
                    "total_volume": 15371,
                    "high_24h": 0.00001373,
                    "low_24h": 0.00001315,
                    "price_change_24h": -2.35692523207e-7,
                    "price_change_percentage_24h": -1.74276,
                    "market_cap_change_24h": -7641.094018160889,
                    "market_cap_change_percentage_24h": -1.61308,
                    "circulating_supply": 35045020830.3234,
                    "total_supply": 45000000000,
                    "max_supply": 45000000000,
                    "ath": 0.00007382,
                    "ath_change_percentage": -81.95908,
                    "ath_date": "2018-01-04T00:00:00.000Z",
                    "atl": 0.00000295,
                    "atl_change_percentage": 351.44029,
                    "atl_date": "2017-11-04T00:00:00.000Z",
                    "roi": null,
                    "last_updated": "2023-03-30T16:56:57.890Z"
                },
                {
                    "id": "staked-ether",
                    "symbol": "steth",
                    "name": "Lido Staked Ether",
                    "image": "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
                    "current_price": 0.06301605,
                    "market_cap": 370752,
                    "market_cap_rank": 8,
                    "fully_diluted_valuation": 370766,
                    "total_volume": 196.265,
                    "high_24h": 0.0636238,
                    "low_24h": 0.06213471,
                    "price_change_24h": -0.00048221706358452,
                    "price_change_percentage_24h": -0.75942,
                    "market_cap_change_24h": -2660.2383296442567,
                    "market_cap_change_percentage_24h": -0.71241,
                    "circulating_supply": 5885010.03992161,
                    "total_supply": 5885231.67700249,
                    "max_supply": 5885231.67700249,
                    "ath": 0.08759959,
                    "ath_change_percentage": -27.78502,
                    "ath_date": "2021-12-09T03:45:24.093Z",
                    "atl": 0.02099117,
                    "atl_change_percentage": 201.36492,
                    "atl_date": "2020-12-22T04:08:21.854Z",
                    "roi": null,
                    "last_updated": "2023-03-30T16:57:00.130Z"
                },
                {
                    "id": "dogecoin",
                    "symbol": "doge",
                    "name": "Dogecoin",
                    "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
                    "current_price": 0.00000265,
                    "market_cap": 367245,
                    "market_cap_rank": 9,
                    "fully_diluted_valuation": null,
                    "total_volume": 16408,
                    "high_24h": 0.00000269,
                    "low_24h": 0.00000261,
                    "price_change_24h": -2.2827808242e-8,
                    "price_change_percentage_24h": -0.85496,
                    "market_cap_change_24h": -3405.2457623506198,
                    "market_cap_change_percentage_24h": -0.91872,
                    "circulating_supply": 138734676383.705,
                    "total_supply": null,
                    "max_supply": null,
                    "ath": 0.00001264,
                    "ath_change_percentage": -79.04565,
                    "ath_date": "2021-05-07T23:04:53.026Z",
                    "atl": 1.50936e-7,
                    "atl_change_percentage": 1655.06886,
                    "atl_date": "2020-12-17T09:18:05.654Z",
                    "roi": null,
                    "last_updated": "2023-03-30T16:56:59.916Z"
                },
                {
                    "id": "matic-network",
                    "symbol": "matic",
                    "name": "Polygon",
                    "image": "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
                    "current_price": 0.00003863,
                    "market_cap": 350330,
                    "market_cap_rank": 10,
                    "fully_diluted_valuation": 385806,
                    "total_volume": 14680,
                    "high_24h": 0.00003971,
                    "low_24h": 0.00003857,
                    "price_change_24h": -8.0466455705e-7,
                    "price_change_percentage_24h": -2.04046,
                    "market_cap_change_24h": -7987.473784052359,
                    "market_cap_change_percentage_24h": -2.22916,
                    "circulating_supply": 9080469069.28493,
                    "total_supply": 10000000000,
                    "max_supply": 10000000000,
                    "ath": 0.00006557,
                    "ath_change_percentage": -41.04623,
                    "ath_date": "2022-11-11T01:11:41.513Z",
                    "atl": 5.09178e-7,
                    "atl_change_percentage": 7492.29108,
                    "atl_date": "2019-05-10T00:00:00.000Z",
                    "roi": {
                        "times": 414.4080000883224,
                        "currency": "usd",
                        "percentage": 41440.800008832244
                    },
                    "last_updated": "2023-03-30T16:57:02.409Z"
                }
            ])
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


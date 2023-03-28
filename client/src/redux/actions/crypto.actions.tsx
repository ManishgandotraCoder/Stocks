import * as cryptoApi from "../apis/crypto.api"
import * as cryptoTypes from "../constants/crypto.types"

export const getData = async (currency:string , page :Number , limit : Number) => {
    const response: any = await cryptoApi.getData(currency,page, limit)
    return {
        type: cryptoTypes.default.GET_ALL_CRYPTO,
        payload: response
    }


}
export const getCoinGraph = async (coin: string, currency: string, days: Number) => {
    const response: any = await cryptoApi.getCoinGraph(coin, currency, days)
    return {
        type: cryptoTypes.default.COIN_GRAPH,
        payload: response.data
    }


}
export const getCoinDetails = async (coin: string) => {
    const response: any = await cryptoApi.getCoinDetails(coin)
    return {
        type: cryptoTypes.default.COIN_DETAILS,
        payload: response.data
    }


}
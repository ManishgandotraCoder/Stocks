import axios from "axios"
import base_url from "../../constants/path"

function getData(currency: string) {
    try {
        return axios.get(`${base_url}crypto/getCrypto/${currency}`)
    }
    catch { 
        return false
    }
}

function getCoinGraph(coin: string, currency: string, days: Number) {
    try {
        return axios.post(`${base_url}crypto/getCryptoGraph`, {
            coin: coin,
            days: days,
            currency: currency
        })
    }
    catch {
        return false
    }
}
function getCoinDetails(coin: string) {
    try {
        return axios.get(`${base_url}crypto/getCryptoDetails/${coin}`)
    }
    catch {
        return false
    }
}
export { getData, getCoinDetails, getCoinGraph }
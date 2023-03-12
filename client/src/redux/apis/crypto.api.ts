import axios from "axios"
function getData() {
    try {
        return axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false`)
    }
    catch {
        return false
    }
}

function getCoinGraph(coin: string, currency: string, days: Number) {
    try {
        return axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}`)
    }
    catch {
        return false
    }
}
function getCoinDetails(coin: string) {
    try {
        return axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
    }
    catch {
        return false
    }
}
export { getData, getCoinDetails, getCoinGraph }
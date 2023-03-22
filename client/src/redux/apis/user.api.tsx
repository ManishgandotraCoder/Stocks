import axios from "axios"
const base_url = "http://localhost:9000/api/login"
function authenticate(email: string, password: string) {
    try {
        return axios.post(base_url, {
            email: email,
            password: password
          })
    }
    catch {
        return false
    }
}
function register() {
    try {
        return axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false`)
    }
    catch {
        return false
    }
}
export { authenticate, register }
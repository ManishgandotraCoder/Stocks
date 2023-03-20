import * as cryptoApi from "../apis/user.api"
import * as cryptoTypes from "../constants/user.types"

export const authenticate = async () => {
    const response: any = await cryptoApi.authenticate()
    return {
        type: cryptoTypes.default.AUTHENTICATE,
        payload: response.data
    }
}
export const register = async () => {
    const response: any = await cryptoApi.register()
    return {
        type: cryptoTypes.default.REGISTER,
        payload: response.data
    }
}
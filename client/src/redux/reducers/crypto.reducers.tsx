const initialState = {
    crypoList: [],
    crypto_graph_details: [],
    crypto_coin_details: {}
};
const change = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_ALL_CRYPTO":
            return { ...state, crypoList: action.payload?.data?.body};
        case "COIN_DETAILS":
            return { ...state, crypto_coin_details: action.payload?.body };
        case "COIN_GRAPH":
            return { ...state , crypto_graph_details: action.payload?.body};

        default: return state;
    }
}
export default change;
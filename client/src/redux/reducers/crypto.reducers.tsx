const initialState = 0;
const change = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_ALL_CRYPTO":
            return action.payload;
        case "COIN_DETAILS":
            // console.log('coin', action.payload);

            return { c_details: action.payload };
        case "COIN_GRAPH":
            // console.log('graph', action.payload);

            return { c_graph_details: action.payload };

        default: return state;
    }
}
export default change;
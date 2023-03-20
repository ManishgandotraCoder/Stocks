const initialState = 0;
const change = (state = initialState, action: any) => {
    switch (action.type) {
        case "AUTHENTICATE":
            return action.payload;
        case "REGISTER":
            return action.payload
        default: return state;
    }
}
export default change;

const initialState = false;
const myReducer = (state = initialState, acttion) => {
    switch (acttion.type) {
        case "TOGGLEFORM":
            state = !state;
            return state;
        case "OPENFORM":
            state = true;
            return state;
        case "CLOSEFORM":
            state = false;
            return state
        default: return state;
    }
}

export default myReducer;
const initialState = "";
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCHTASK":
            return action.payload;
        default: return state;
    }
}

export default myReducer;
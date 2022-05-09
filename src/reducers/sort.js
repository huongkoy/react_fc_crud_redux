const initialState = {
    by: "name",
    value: 1
};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SORTTASK":
            console.log(action.payload)
            return {
                by: action.payload.by,
                value: action.payload.value
            };
        default: return state;
    }
}

export default myReducer;
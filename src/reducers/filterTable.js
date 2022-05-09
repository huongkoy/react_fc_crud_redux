const initialState = {
    name: "",
    status: -1,
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FILTERTASK":
            action.payload.status = parseInt(action.payload.status, 10);
            // console.log(action.payload);
            return {
                name: action.payload.name,
                status: action.payload.status,
            };
        default: return state
    }
}

export default myReducer;
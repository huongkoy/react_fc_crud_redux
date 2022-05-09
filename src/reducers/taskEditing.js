
const initialState = {
    id: "",
    name: "",
    status: false
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATETASK":
            return action.payload;
        default: return state

    }
}

export default myReducer;
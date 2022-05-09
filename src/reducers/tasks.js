
const s4 = () => {
    // Mart.floor làm tròn số.
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
const generateID = () => {
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4();
}

const findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            return result = index;
        }
    });
    return result;
}

const data = JSON.parse(localStorage.getItem("tasks"))
const initialState = data ? data : [];
const myReducer = (state = initialState, action) => {
    var id = "";
    var index = -1;
    switch (action.type) {
        case "LISTALL":
            return state;
        case "SAVETASK":
            var newTask = {
                id: action.payload.id,
                name: action.payload.name,
                status: action.payload.status
            }
            if (!newTask.id) {
                newTask.id = generateID();
                state.push(newTask);
            } else {
                index = findIndex(state, newTask.id);
                state[index] = newTask;
            }
            localStorage.setItem("tasks", JSON.stringify(state));
            console.log(newTask);
            return [...state]
        case "UPDATESTATUS":
            id = action.payload;
            index = findIndex(state, id);
            state[index].status = !state[index].status;
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state]
        case "DELETETASK":
            id = action.payload;
            index = findIndex(state, id);
            state.splice(index, 1)
            localStorage.setItem("tasks", JSON.stringify(state));
            // console.log(id);
            return [...state];
        default:
            return state;
    }
}

export default myReducer;
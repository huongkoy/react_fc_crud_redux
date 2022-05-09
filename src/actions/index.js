export const listAll = () => {
    return {
        type: "LISTALL",
    }
}

export const toggleForm = () => {
    return {
        type: "TOGGLEFORM",
    }
}
export const close = () => {
    return {
        type: "CLOSEFORM",
    }
}


export const openForm = () => {
    return {
        type: "OPENFORM"
    }
}

export const saveTask = (task) => {
    return {
        type: "SAVETASK",
        payload: task
    }
}

export const updateStatus = (id) => {
    return {
        type: "UPDATESTATUS",
        payload: id
    }
}

export const deleteTask = (id) => {
    return {
        type: "DELETETASK",
        payload: id
    }
}
export const updateTask = (task) => {
    return {
        type: "UPDATETASK",
        payload: task
    }
}

export const filterTask = (filter) => {
    return {
        type: "FILTERTASK",
        payload: filter
    }
}

export const searchTask = (keyword) => {
    return {
        type: "SEARCHTASK",
        payload: keyword
    }
}

export const sortTask = (sort) => {
    return {
        type: "SORTTASK",
        payload: sort
    }
}
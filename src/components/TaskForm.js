import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveTask, close, } from './../actions';

function TaskForm() {
    const [inputValue, setInputValue] = useState({
        id: "",
        name: "",
        status: false
    });

    const taskEditing = useSelector(state => state.taskEditing);

    const isDisplayForm = useSelector(state => state.isDisplayForm);

    const dispatch = useDispatch();
    const dispatchSaveToTask = (tasks) => { dispatch(saveTask(tasks)) };
    const dispatchCloseForm = () => { dispatch(close()) }

    useEffect(() => {
        if (taskEditing) {
            setInputValue({
                id: taskEditing.id,
                name: taskEditing.name,
                status: taskEditing.status
            })
        } else {
            onClear();
        }
    }, []);

    useEffect(() => {
        if (taskEditing) {
            setInputValue({
                id: taskEditing.id,
                name: taskEditing.name,
                status: taskEditing.status
            })
        } else if (taskEditing === null) {
            onClear();
        }
    }, [taskEditing]);



    const onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if (name === "status") {
            value = target.value === "true" ? true : false
        }
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchSaveToTask(inputValue);
        onClear();
        dispatchCloseForm();
    }


    const onClear = () => {
        if (inputValue.id !== "") {
            setInputValue({
                id: taskEditing.id,
                name: "",
                status: false
            })
        } else {
            setInputValue({
                id: "",
                name: "",
                status: false
            })
        }
    }
    const closeForm = () => {
        dispatchCloseForm();
    }
    if (isDisplayForm === false) return null;
    return ( <
        div className = "panel panel-warning" >
        <
        div className = "panel-heading" >
        <
        h3 className = "panel-title" > { inputValue.id === "" ? "Thêm công việc" : "Update công việc" } < /h3> <
        span className = "fa fa-times-circle text-right sp"
        onClick = { closeForm } >
        <
        /span> < /
        div > <
        div className = "panel-body" >
        <
        form onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        label > Tên: < /label> <
        input type = "text"
        className = "form-control"
        name = "name"
        value = { inputValue.name }
        onChange = { onChange }
        /> < /
        div > <
        label > Trạng Thái: < /label> <
        select className = "form-control"
        name = "status"
        value = { inputValue.status }
        onChange = { onChange } >
        <
        option value = { true } > Kích Hoạt < /option> <
        option value = { false } > Ẩn < /option> < /
        select > <
        br / >
        <
        div className = "text-center" >
        <
        button type = "submit"
        className = "btn btn-warning" > { inputValue.id !== "" ? "Update" : "Thêm" } < /button>&nbsp; <
        button type = "button"
        onClick = { onClear }
        className = "btn btn-danger" > Hủy Bỏ < /button> < /
        div > <
        /form> < /
        div > <
        /div>
    )
}

export default TaskForm;
import TaskItem from "./TaskItem"
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterTask } from "../actions";

function TaskList() {

    const [filterName, setFilterName] = useState("");
    const [filterStatus, setFilterStatus] = useState(-1); // tất cả là -1
    const taskList = useSelector(state => state.tasks);
    const filterTable = useSelector(state => state.filterTable);
    const search = useSelector(state => state.search);
    const sort = useSelector(state => state.sort);
    const dispatch = useDispatch();
    const dispatchFilterTask = (payload) => { dispatch(filterTask(payload)) }

    const handChange = (e, type) => {
        let value = e.target.value;
        console.log(type)
        dispatchFilterTask({
            ...filterTable,
            [type]: value
        });
        if (type === "name") {
            setFilterName(value)
        }
        if (type === "status") {
            setFilterStatus(value)
        }
    }

    const mapstate = useMemo(() => {
        var newData = [...taskList]
        if (search !== null) {
            newData = taskList.filter((task) => {
                return task.name.toLowerCase().indexOf(search) !== -1;
            })
        }
        if (sort.by === "name") {
            taskList.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            })
        } else {
            taskList.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            })
        }


        if (filterTable.status === 1) { // active
            newData = taskList.filter((task) => task.status === true)
        }
        if (filterTable.status === 0) { /// hidden
            newData = taskList.filter((task) => task.status === false)
        }
        if (filterTable.name !== "") {
            newData = newData.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
            });
            // console.log(filterTable);
        }

        return newData
    }, [filterTable, search, sort.by, sort.value, taskList])

    return ( <
        table className = "table table-bordered table-hover mt" >
        <
        thead >
        <
        tr >
        <
        th className = "text-center" > STT < /th> <
        th className = "text-center" > Tên < /th> <
        th className = "text-center" > Trạng Thái < /th> <
        th className = "text-center" > Hành Động < /th> < /
        tr > <
        /thead> <
        tbody >
        <
        tr >
        <
        td > < /td> <
        td >
        <
        input type = "text"
        className = "form-control"
        name = "filterName"
        value = { filterName }
        onChange = {
            (e) => handChange(e, "name")
        }
        /> < /
        td > <
        td >
        <
        select className = "form-control"
        name = "filterStatus"
        value = { filterStatus }
        onChange = {
            (e) => handChange(e, "status")
        } >
        <
        option value = "-1" > Tất Cả < /option> <
        option value = "0" > Ẩn < /option> <
        option value = "1" > Kích Hoạt < /option> < /
        select > <
        /td> <
        td > < /td> < /
        tr > {
            mapstate.map((task, index) => {
                return <TaskItem
                key = { index }
                index = { index }
                task = { task }
                />
            })
        } <
        /tbody> < /
        table >
    )
}
export default TaskList;
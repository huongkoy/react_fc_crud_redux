import { useDispatch } from "react-redux";
import { deleteTask, openForm, updateStatus, updateTask } from "../actions";

function TaskItem({ task, index, }) {


    const dispatch = useDispatch();
    const dispatchOpenForm = () => { dispatch(openForm()) }
    const dispatchUpdateStatus = (payload) => { dispatch(updateStatus(payload)) };
    const dispatchDeleteTask = (payload) => { dispatch(deleteTask(payload)) };
    const dispatchUpdateTask = (payload) => { dispatch(updateTask(payload)) };

    const onDeleteTask = () => {
        dispatchDeleteTask(task.id);
    }
    const onUpdateStatus = () => {
        dispatchUpdateStatus(task.id);
    }
    const onUpdateTask = () => {
        dispatchOpenForm();
        dispatchUpdateTask(task);
        // console.log(task);
    }


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <span
                    className={task.status === true ? "label label-success" : "label label-danger"}
                    onClick={onUpdateStatus}
                >
                    {task.status === true ? "Kích hoạt" : "Ẩn"}

                </span>
            </td>
            <td className="text-center">
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={onUpdateTask}
                >
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={onDeleteTask}
                >
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
            </td>
        </tr>
    )
}
export default TaskItem;
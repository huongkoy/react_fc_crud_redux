import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskSearchControl from './components/TaskSearchControl';
import TaskSortControl from './components/TaskSortControl';
import { useDispatch, useSelector } from 'react-redux';
import { closeForm, openForm, toggleForm, updateTask } from './actions';

function App() {
    const isDisplayForm = useSelector(state => state.isDisplayForm);
    const taskEditing = useSelector(state => state.taskEditing);
    const dispatch = useDispatch();
    const dispatchOpenForm = () => { dispatch(openForm()) }
    const dispatchToggleForm = () => { dispatch(toggleForm()) }
    const dispatchClearTask = (task) => { dispatch(updateTask(task)) }
    // const dispatchCloseForm = () => { dispatch(closeForm()) }

    const onToggleForm = () => {
        if (taskEditing && taskEditing.id !== "") {
            dispatchOpenForm();
            dispatchClearTask({
                id: "",
                name: "",
                status: false
            })
        } else {
            dispatchToggleForm();
        }
    }

    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr />
            </div>
            <div className="row">
                <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                    <TaskForm />
                </div>
                <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onToggleForm}
                    >
                        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>
                    <div className="row mt-15">
                        <TaskSearchControl />
                        <TaskSortControl />
                    </div>
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <TaskList
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

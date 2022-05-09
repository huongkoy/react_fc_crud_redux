/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import { sortTask } from "../actions";
// sort_selected
const TaskSortControl = () => {
    const sort = useSelector(state => state.sort)
    const dispatch = useDispatch();
    const dispatchSort = (payload) => { dispatch(sortTask(payload)) }

    const handClick = (sortBy, sortValue) => {
        dispatchSort({
            by: sortBy,
            value: sortValue,
        })
        console.log(sortBy, "_", sortValue);
    }
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown mt">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li onClick={() => handClick("name", 1)}>
                        <a
                            role="button"
                            className={sort.by === "name" && sort.value === 1 ? "sort_selected" : ""}
                        >
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                            </span>
                        </a>
                    </li>
                    <li onClick={() => handClick("name", -1)}>
                        <a
                            role="button"
                            className={sort.by === "name" && sort.value === -1 ? "sort_selected" : ""}
                        >
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Tên Z-A
                            </span>
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li onClick={() => handClick("status", 1)}>
                        <a
                            className={sort.by === "status" && sort.value === 1 ? "sort_selected" : ""}
                            role="button">Trạng Thái Kích Hoạt</a>
                    </li>
                    <li onClick={() => handClick("status", 1)}>
                        <a
                            className={sort.by === "status" && sort.value === -1 ? "sort_selected" : ""}
                            role="button">Trạng Thái Ẩn</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TaskSortControl;
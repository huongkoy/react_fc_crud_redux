import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTask } from "../actions";

const TaskSearchControl = () => {

    const [keyword, setKeyword] = useState();
    const dispatch = useDispatch();
    const dispatchSearch = (payload) => { dispatch(searchTask(payload)) }
    const handSearch = () => {
        dispatchSearch(keyword);
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group mt">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                    name="keyword"
                    value={keyword}
                    onChange={(e) => {
                        const value = e.target.value;
                        setKeyword(value);
                    }}
                />
                <span className="input-group-btn">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handSearch}
                    >
                        <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                </span>
            </div>
        </div>
    )
}

export default TaskSearchControl;



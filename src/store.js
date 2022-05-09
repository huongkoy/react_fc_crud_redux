import { createStore } from "redux";
import myRedudcer from "./reducers";

const store = createStore(myRedudcer);

export default store;
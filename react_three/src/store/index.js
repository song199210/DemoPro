import {createStore} from "redux";
import {LoadReducers} from "./reducers";

const store = createStore(LoadReducers);

export default store;
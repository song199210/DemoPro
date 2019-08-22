import {createStore,combineReducers} from "redux";
import {HInfoReducer} from "./reducer";

const allReducers={
  hInfo:HInfoReducer
}
const reducers=combineReducers(allReducers);
const store=createStore(reducers);

export default store;
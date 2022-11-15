import { combineReducers } from "redux";
import ammountReducer from "./ammountReducer";

const reducers = combineReducers ({
    ammount: ammountReducer
})
export default reducers;
import {combineReducers} from "redux";

import clock from "./clock/reducer";

// Add new reducers here.
export const rootReducer = combineReducers({
    clock
});

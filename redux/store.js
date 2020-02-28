import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import clock from "./clock/reducer";

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== "production") {
        return (composeWithDevTools(applyMiddleware(...middleware)));
    }

    return applyMiddleware(...middleware);
};

const initStore = () => {
    return createStore(
        combineReducers({
            clock
        }),
        bindMiddleware([thunkMiddleware])
    );
};

export default initStore;

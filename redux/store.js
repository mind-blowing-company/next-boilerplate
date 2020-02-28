import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {rootReducer} from "./rootReducer";

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== "production") {
        return (composeWithDevTools(applyMiddleware(...middleware)));
    }

    return applyMiddleware(...middleware);
};

const initStore = () => {
    return createStore(
        rootReducer,
        bindMiddleware([thunkMiddleware])
    );
};

export default initStore;

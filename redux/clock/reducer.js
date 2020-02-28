import {clockActionTypes} from "./actions";

const clockInitialState = {
    lastUpdate: 0
};

export default (state = clockInitialState, action) => {
    switch(action.type) {
        case clockActionTypes.TICK:
            return {
                ...state,
                lastUpdate: action.timestamp
            };
        default:
            return state;
    }
};

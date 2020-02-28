export const clockActionTypes = {
    TICK: "TICK"
};

export const startClock = () => dispatch => {
    return setInterval(() => {
        dispatch({
            type: clockActionTypes.TICK, timestamp: Date.now()
        });
    }, 1000);
};

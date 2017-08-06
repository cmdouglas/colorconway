export const SELECT_COLOR = 'SELECT_COLOR';
export const selectColor = (color) => {
    return {
        type: SELECT_COLOR,
        color: color
    }
};

export const STEP = 'STEP';
export const step = () => {
    return {
        type: STEP,
    }
};

export const RUN = 'RUN';
export const run = () => {
    return {
        type: RUN,
    }
};

export const PAUSE = 'PAUSE';
export const pause = () => {
    return {
        type: PAUSE,
    }
};

export const SET_CELL = 'SET_CELL';
export const setCell = (point, color) => {
    return {
        type: SET_CELL,
        point: point,
        color: color
    }
};


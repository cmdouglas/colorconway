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

export const SET_CELL = 'SET_CELL';
export const setCell = (point, color) => {
    return {
        type: SET_CELL,
        point: point,
        color: color
    }
};

export const CLEAR = 'CLEAR';
export const clear = () => {
    return {
        type: CLEAR
    }
};

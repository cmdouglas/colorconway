import {combineReducers} from 'redux';
import {SELECT_COLOR, STEP, RUN, PAUSE, SET_CELL} from '../actions';
import {BOARD_WIDTH, BOARD_HEIGHT} from "../settings";
import ColorConwayBoard from '../gamelogic';



const isRunning = (isRunning = false, action) => {
    switch (action.type) {
        case RUN: {
            return true;
        }
        case PAUSE: {
            return false;
        }
        default: {
            return isRunning;
        }
    }
};

const selectedColor = (selectedColor = null, action) => {
    switch (action.type) {
        case SELECT_COLOR: {
            return action.color;
        }
        default: {
            return isRunning;
        }
    }
};

const board = (board = null, action) => {
    if (!board) {
        board = new ColorConwayBoard(BOARD_WIDTH, BOARD_HEIGHT);
    }
    switch (action.type) {
        case STEP: {
            return board.getNext();
        }
        case SET_CELL: {
            const newBoard = board.clone();
            newBoard.setCell(action.point, action.color);
            return newBoard;
        }
        default: {
            return board;
        }
    }
};

const rootReducer = combineReducers({
    isRunning,
    selectedColor,
    board
});

export default rootReducer;
import {combineReducers} from 'redux';
import {SELECT_COLOR, STEP, SET_CELL, CLEAR} from './actions';
import {BOARD_WIDTH, BOARD_HEIGHT} from "./settings";
import ColorConwayBoard from './gamelogic';

export const selectedColor = (selectedColor = null, action) => {
    switch (action.type) {
        case SELECT_COLOR: {
            return action.color;
        }
        default: {
            return selectedColor;
        }
    }
};

export const board = (board = null, action) => {
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
        case CLEAR: {
            return new ColorConwayBoard(BOARD_WIDTH, BOARD_HEIGHT);
        }
        default: {
            return board;
        }
    }
};

const rootReducer = combineReducers({
    selectedColor,
    board
});

export default rootReducer;
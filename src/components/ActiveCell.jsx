import Cell from './Cell';
import {connect} from 'react-redux';
import {setCell} from '../actions';

const mapStateToProps = (state, ownProps) => ({
    color: state.board.liveCells.get([ownProps.x, ownProps.y]),
    selectedColor: state.selectedColor
});


function mergeProps(stateProps, dispatchProps, ownProps) {
    return {
        ...ownProps,
        setCell: () => dispatchProps.dispatch(setCell([ownProps.x, ownProps.y], stateProps.selectedColor))
    }
}

const ActiveCell = connect(mapStateToProps, null, mergeProps) (Cell);
export default ActiveCell;
import ColorSelector from './ColorSelector';
import {connect} from 'react-redux';
import {selectColor} from '../actions';

const mapStateToProps = (state, ownProps) => ({
    selected: (state.selectedColor === ownProps.color)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(selectColor(ownProps.color));
    }
});

const ActiveColorSelector = connect(mapStateToProps, mapDispatchToProps) (ColorSelector);

export default ActiveColorSelector;
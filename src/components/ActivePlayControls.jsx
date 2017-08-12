import PlayControls from "./PlayControls";
import {connect} from "react-redux";
import {step, clear} from "../actions";
import {REFRESH_DELAY} from '../settings';


const mapDispatchToProps = (dispatch) => {
    let animate;
    return {
        step: () => {
            dispatch(step());
        },
        start: () => {
            clearInterval(animate);
            animate = setInterval(() => {dispatch(step())}, REFRESH_DELAY);
        },
        stop: () => {
            clearInterval(animate);
        },
        clear: () => {
            dispatch(clear());
        }
    }
};

const ActivePlayControls = connect(null, mapDispatchToProps)(PlayControls);

export default ActivePlayControls;
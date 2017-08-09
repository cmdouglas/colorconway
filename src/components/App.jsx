import {connect} from 'react-redux';
import ColorConway from './ColorConway';

const mapStateToProps = (state) => ({
    board: state.board
});

const App = connect(mapStateToProps) (ColorConway);

export default App;
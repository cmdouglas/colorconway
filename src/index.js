import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ColorConwayBoard from './gamelogic';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore} from 'redux';


const colorConway = (rootElement) => {
    const board = new ColorConwayBoard(16, 16);

    const store = createStore(rootReducer);

    ReactDOM.render(
        <Provider store={store} >
            <App />
        </Provider>,
        rootElement
    );
};

export default colorConway;
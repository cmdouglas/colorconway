import React from 'react';
import ReactDOM from 'react-dom';

import ColorConway from './components/ColorConway';

const colorConway = (rootElement) => {
    ReactDOM.render(
        <ColorConway/>,
        rootElement
    );
};

export default colorConway;
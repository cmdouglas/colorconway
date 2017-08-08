import React from 'react';

class Cell extends React.Component
{
    render() {
        let className = "conway-cell";
        if (this.props.color) {
            className = className + ' ' + this.props.color;
        }
        return <div className={className} />
    }
}
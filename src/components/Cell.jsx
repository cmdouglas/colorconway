import React from 'react';

export default class Cell extends React.Component
{
    render() {
        let className = "conway-cell";
        if (this.props.color) {
            className = className + ' ' + this.props.color;
        }
        return <td className={className} />
    }
}
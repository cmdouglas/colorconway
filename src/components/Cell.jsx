import React from 'react';

export default class Cell extends React.Component
{
    render() {
        let className = "conway-cell";
        return <td onClick={this.props.setCell} className={className} style={{backgroundColor: this.props.color || 'white'}} />
    }
}
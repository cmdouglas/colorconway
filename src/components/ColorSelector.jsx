import React from "react"

export default class ColorSelector extends React.Component {


    render() {
        let className = 'color-selector';
        if (this.props.selected) {
            className += ' selected'
        }

        return (
            <li onClick={this.props.onClick} className={className} style={{backgroundColor: this.props.color || 'white'}}>

            </li>
        )
    }
}
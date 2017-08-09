import React from 'react';
import ColorSelector from "./ColorSelector";
import PlayControls from "./PlayControls";
import Board from "./Board";

export default class ColorConway extends React.Component {
    render() {
        return(
            <div className="color-conway">
                <div className="controls">
                    <ColorSelector selectedColor={this.props.selectedColor} />
                    <PlayControls paused={this.props.paused} />
                </div>
                <Board board={this.props.board} />
            </div>
        );
    }
}
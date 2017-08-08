import React from 'react';
import ColorSelector from "./ColorConway";
import PlayControls from "./PlayControls";
import Board from "./Board";

class ColorConway extends React.Component {
    render() {
        return(
            <div class="color-conway">
                <div class="controls">
                    <ColorSelector selectedColor={this.props.selectedColor} />
                    <PlayControls paused={this.props.paused} />
                </div>
                <Board board={this.props.board} />
            </div>
        );
    }
}

export default ColorConway;
import React from "react";
import ActiveColorSelector from "./ActiveColorSelector";
import ActivePlayControls from "./ActivePlayControls";
import Board from "./Board";

export default class ColorConway extends React.Component {
    render() {
        return (
            <div className="color-conway">
                <div className="controls">
                    <ActivePlayControls />
                    <ul className="color-selector-container" >
                        <ActiveColorSelector color={null}/>
                        <ActiveColorSelector color="red"/>
                        <ActiveColorSelector color="yellow"/>
                        <ActiveColorSelector color="green"/>
                        <ActiveColorSelector color="blue"/>
                    </ul>
                </div>
                <div style={{clear: 'both'}} />
                <Board board={this.props.board}/>
            </div>
        );
    }
}
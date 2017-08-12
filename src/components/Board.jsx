import React from "react";
import ActiveCell from "./ActiveCell";

export default class Board extends React.Component
{
    render() {
        return (
            <table className="conway-board" >
                <tbody>
                {[...new Array(this.props.board.height)].map((row, y) =>
                    <tr key={y} className = "conway-board-row">
                        {[...new Array(this.props.board.width)].map((cell, x) =>
                            <ActiveCell key={[x, y]} x={x} y={y} color={this.props.board.getCell([x, y])} />
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

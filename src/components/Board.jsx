import React from "react";
import Cell from "./Cell";

export default class Board extends React.Component
{
    render() {
        return (
            <table className="conway-board" >
                <tbody>
                {[...new Array(this.props.board.height)].map((row, y) =>
                    <tr key={y} className = "conway-board-row">
                        {[...new Array(this.props.board.width)].map((cell, x) =>
                            <Cell key={[x, y]} x={x} y={y} color={this.props.board.liveCells.get([x, y])} />
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

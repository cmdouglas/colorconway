import React from "react";
import Cell from "./Cell";

class Board extends React.Component
{
    render() {
        return (
            <div className="conway-board" >
                {this.props.board.rows.map((row, y) =>
                    <div className = "conway-board-row">
                        {row.map((cell, x) =>
                            <Cell x={x} y={y} color={cell} />
                        )}
                    </div>
                )}
            </div>
        );
    }
}

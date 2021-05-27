import React from "react";
import Square from "../square/Square";
import './Board.css';

class Board extends React.Component {

    render() {
        return(
            <div className="Board">
                <div className="grid-container">
                    <div id="float">
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div id="float">
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div id="float">
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div id="float">
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div id="float">
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div id="float">
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div id="float">
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div id="float">
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div id="float">
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div id="float">
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                        <Square />
                    </div>
                </div>
            </div>
        )
    }
}

export default Board;
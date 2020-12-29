import React, {useEffect} from "react";

import BoardTile from "./BoardTile";

const Board = () => {
    
    const ROWS = 5;
    const COLUMNS = 5;
    const BOARD = [];
    const createTable = () => {
        for (let i = 0; i < ROWS; i++) {
            let children = []
            for (let j = 0; j < COLUMNS; j++) {
                children.push(<BoardTile content={j}/>)
            }
            BOARD.push(children)
        }
        return BOARD;
    }

    return (
      <div id="board-table">
        <h2>Jeopardy game board</h2>
            <div className="board-tiles">
                {createTable()}
            </div>
      </div>  
    )
}

export default Board;
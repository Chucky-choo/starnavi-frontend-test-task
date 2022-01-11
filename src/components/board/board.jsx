import { useSelector } from "react-redux";
import Square from "./square/square";

const Board = () => {
  const { hoverData, field } = useSelector((store) => store.board);

  const createRow = (rowNumber) => {
    let row = [];
    for (let i = 1; i <= field; i++) {
      row.push(
        <Square
          key={`row-${i}`}
          row={rowNumber}
          index={i - 1}
          isHover={hoverData[rowNumber][i - 1]}
        />
      );
    }
    return row;
  };

  const createBoard = () => {
    let board = [];
    for (let i = 1; i <= field; i++) {
      board.push(
        <div key={i} style={{ display: "flex" }}>
          {createRow(i)}
        </div>
      );
    }
    return board;
  };

  return <div>{createBoard()}</div>;
};

export default Board;

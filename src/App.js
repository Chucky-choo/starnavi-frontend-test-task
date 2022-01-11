import { useEffect, useState } from "react";
import Board from "./components/board/board";
import { useDispatch, useSelector } from "react-redux";
import { setHoverData } from "./redux/slices/board-reducer";
import HoverSquareList from "./components/hoverSquareList/hoverSquareList";
import PickMode from "./components/pickMode/pickMode";

function App() {
  const [isStart, setStart] = useState(false);
  const { field } = useSelector((store) => store.board);
  const dispatch = useDispatch();

  useEffect(() => {
    let stateBoard = {};
    for (let i = 1; i <= field; i++) {
      stateBoard[i] = Array(field).fill(false);
    }
    dispatch(setHoverData(stateBoard));
  }, [field]);

  return (
    <div className="body">
      <div>
        <PickMode setStart={setStart} />
        {isStart ? <Board /> : null}
      </div>
      {isStart ? <HoverSquareList /> : null}
    </div>
  );
}

export default App;

import style from "./square.module.css";
import { useDispatch } from "react-redux";
import { changeColorSquare } from "../../../redux/slices/board-reducer";

const Square = ({ row, index, isHover }) => {
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    dispatch(changeColorSquare({ row, index }));
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      className={isHover ? `${style.square} ${style.blue}` : style.square}
    />
  );
};

export default Square;

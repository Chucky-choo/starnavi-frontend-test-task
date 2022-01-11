import React from "react";
import { useSelector } from "react-redux";
import { StyledPaper } from "./StyledPaper";
import style from "./list.module.css";

const HoverSquareList = () => {
  const { hoverData } = useSelector((store) => store.board);

  const generateList = () => {
    let hoverList = [];
    for (let rowNumber in hoverData) {
      const item = hoverData[rowNumber].map((el, index) => {
        if (el) {
          return (
            <StyledPaper key={index}>
              row {rowNumber} col {index + 1}
            </StyledPaper>
          );
        }
      });
      hoverList.push(item);
    }
    return hoverList;
  };

  return (
    <div className={style.wrapper}>
      <h2>Hover squares</h2>
      {generateList()}
    </div>
  );
};

export default HoverSquareList;

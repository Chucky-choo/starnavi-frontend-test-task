import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { getMode } from "../../Api";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import { setField } from "../../redux/slices/board-reducer";
import { CustomSelector } from "./CustomeSelector";

const PickMode = ({ setStart }) => {
  const [mode, setMode] = useState(undefined);
  const { field } = useSelector((store) => store.board);

  const dispatch = useDispatch();

  const fetchMode = async () => {
    const res = await getMode();
    setMode(res);
  };

  useEffect(fetchMode, []);

  const handleChange = (event) => {
    setStart(false);
    dispatch(setField(event.target.value));
  };

  const createOptionsBlock = (mode) => {
    let data = [];
    for (let key in mode) {
      if (mode.hasOwnProperty(key)) {
        data.push(
          <MenuItem key={key} value={mode[key].field}>
            {key.replace(/Mode/, "")}
          </MenuItem>
        );
      }
    }
    return data;
  };

  return (
    <div>
      <CustomSelector value={field} onChange={handleChange} displayEmpty>
        <MenuItem disabled value="">
          Pick mode
        </MenuItem>
        {createOptionsBlock(mode)}
      </CustomSelector>
      <Button
        onClick={() => {
          setStart(true);
        }}
        variant="contained"
      >
        start
      </Button>
    </div>
  );
};

export default PickMode;

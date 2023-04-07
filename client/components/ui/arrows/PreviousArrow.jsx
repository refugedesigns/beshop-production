import React from 'react'
import { IconButton } from "@mui/material";
import { FcPrevious} from "react-icons/fc";

const PreviousArrow = ({onClick, classes}) => {
  return (
    <IconButton
      className={`${classes} w-10 h-14 bg-gray-100 border border-solid border-gray-200 rounded-none`}
      onClick={onClick}
      aria-label="previous"
    >
      <FcPrevious />
    </IconButton>
  );
}

export default PreviousArrow
import React from 'react'
import { Button as MUIButton } from '@mui/material';

const Button = ({title, onClick, classes}) => {
  return (
    <MUIButton
      disableElevation
      variant="contained"
      className={`rounded-none bg-black text-white flex justify-center w-[200px] z-20 ${classes}`}
    >
      {title}
    </MUIButton>
  );
}

export default Button
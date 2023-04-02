import React from 'react'
import { Button as MUIButton } from '@mui/material';

const Button = ({title, classes, ...props}) => {
  return (
    <MUIButton
      disableElevation
      variant="contained"
      className={`rounded-none bg-black text-white flex justify-center w-[200px] z-20 ${classes}`}
     {...props}
    >
      {title}
    </MUIButton>
  );
}

export default Button
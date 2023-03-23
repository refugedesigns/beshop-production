import React from 'react'

import { IconButton } from '@mui/material'
import { FcNext } from 'react-icons/fc';

const NextArrow = ({onClick, classes}) => {
  return (
    <IconButton
      className={`${classes} w-10 h-14 bg-gray-100 border border-solid border-gray-200 rounded-none`}
      onClick={onClick}
      aria-label="next"
    >
      <FcNext />
    </IconButton>
  );
}

export default NextArrow
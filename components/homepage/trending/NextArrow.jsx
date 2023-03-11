import React from 'react'

import { IconButton } from '@mui/material'
import { FcNext } from 'react-icons/fc';

const NextArrow = ({onClick}) => {
  return (
    <IconButton
      className="w-10 h-14 bg-gray-100 border border-solid border-gray-200 rounded-none"
      onClick={onClick}
      aria-label="previous"
    >
      <FcNext />
    </IconButton>
  );
}

export default NextArrow
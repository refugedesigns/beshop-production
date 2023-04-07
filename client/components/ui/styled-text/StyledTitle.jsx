import React from 'react'

import { Typography } from '@mui/material';

const StyledTitle = ({title, classes, align}) => {
  return (
    <Typography
      variant="h2"
      className={`font-styling text-style-color text-5xl md:text-6xl ${classes}`}
      align={align}
    >
     {title}
    </Typography>
  );
}
 export default StyledTitle;
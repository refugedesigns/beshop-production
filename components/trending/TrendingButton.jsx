import React from 'react'

import { Button } from '@mui/material'

const TrendingButton = ({ onClick, title, isLastChild }) => {
  return (
    <Button
      className={`rounded-none shadow-none focus:bg-style-color focus:text-white font-body whitespace-nowrap w-full md:w-max py-2 bg-white border-solid border border-gray-200 ${
        isLastChild
          ? "border-b-1"
          : "border-b-0 md:border md:border-solid md:border-b-1 md:border-gray-200"
      }`}
      onClick={onClick}
      variant="contained"
      color="primary"
    >
      {title}
    </Button>
  );
};

export default TrendingButton
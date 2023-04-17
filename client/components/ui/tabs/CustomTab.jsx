import React from 'react'
import { Tab } from '@mui/material';

const CustomTab = ({label, ...props}) => {
  return (
    <Tab
      sx={{
        backgroundColor: "#faf9ff",
        border: "1px solid #eee",
        textTransform: "capitalize",
        fontSize: "1rem",
        color: "#808080",
        whiteSpace: "nowrap",
        "&.Mui-selected": {
          backgroundColor: "#d05278",
          color: "white",
          textTransform: "capitalize",
          fontSize: "1rem",
          border: "none",
        },
        px: 5,
        minWidth: {
          xs: "100%",
          md: "auto",
        },
      }}
      label={label}
      {...props}
    />
  );
}

export default CustomTab
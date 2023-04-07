import React from "react";
import { TextField } from "@mui/material";

const InputField = ({...props}) => {
  return (
    <TextField
      {...props}
      sx={{
        "& fieldset": {
          border: "1px solid #FCECEB",
          borderRadius: 0,
        },
      }}
      inputProps={{
        sx: {
          backgroundColor: "white",
        },
      }}
    />
  );
};

export default InputField;

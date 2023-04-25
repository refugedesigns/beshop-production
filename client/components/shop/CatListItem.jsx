import React from "react";
import { Typography, Divider, Box, Stack } from "@mui/material";

const CatListItem = ({ title, number, ...props }) => {
  return (
    <Box {...props} className="group">
      <Stack direction="row" spacing={1} alignItems="end" className="group-hover:text-style-color group-hover:cursor-pointer">
        <Typography variant="h6" component="p" className="text-sm">
          {title}
        </Typography>
        <Typography variant="h6" component="p" className="text-xs">
          {`(${number})`}
        </Typography>
      </Stack>
      <Divider className="mt-2 group-hover:bg-style-color group-hover:cursor-pointer" />
    </Box>
  );
};

export default CatListItem;

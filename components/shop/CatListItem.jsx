import React from "react";
import { Typography, Divider, Box, Stack } from "@mui/material";

const CatListItem = ({ title, number }) => {
  return (
    <Box>
      <Stack direction="row" spacing={3}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h6" component="div">
          {`(${number})`}
        </Typography>
      </Stack>
      <Divider />
    </Box>
  );
};

export default CatListItem;

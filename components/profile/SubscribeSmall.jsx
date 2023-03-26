import React from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Button from "../ui/button/Button";

const SubscribeSmall = () => {
  return (
    <Stack className="bg-[url('/assets/img/subscribe-img-decor-sm.png')] ">
      <Typography>Stay In Touch</Typography>
      <Box>
        <TextField
          name="subscribe"
          id="subscribe"
          placeholder="Enter your email"
          fullWidth
        />
        <Button title="Subscribe" />
      </Box>
    </Stack>
  );
};

export default SubscribeSmall;

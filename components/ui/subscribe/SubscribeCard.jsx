import React from "react";

import { Container, Typography, TextField, Box } from "@mui/material";
import Button from "../button/Button";

const SubscribeCard = () => {
  return (
    <Container>
      <Typography variant="h5" component="h2">
        Stay In Touch
      </Typography>
      <Typography>Nourish your skin toxin-free cosmetic products.</Typography>
      <Box>
        <TextField id="outlined-basic" label="Your email" variant="outlined" />
        <Button variant="contained" color="primary">
          Subscribe
        </Button>
      </Box>
    </Container>
  );
};

export default SubscribeCard;

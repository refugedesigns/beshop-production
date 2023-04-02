import { Box, Typography, Rating } from "@mui/material";
import React from "react";
import InputField from "../ui/inpu-field/InputField";
import Button from "../ui/button/Button";

const ReviewForm = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h4">Leave A Review</Typography>
        <Typography variant="body1">
          Your email address will not be published.
        </Typography>
      </Box>
      <Box>
        <Rating color="white" readOnly={true} value={5} />
        <Box component="form" >
            <InputField 
            placeholder="Enter your name"
            name="name"
            id="name"
            type="text"
            />
            <InputField 
            placeholder="Enter your email"
            name="email"
            id="email"
            type="email"
            />
            <InputField 
            placeholder="Enter your review"
            name="review"
            id="review"
            type="text"
            multiline 
            rows={5}
            />
            <Button type="submit" title="Send" />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewForm;

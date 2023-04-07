import { Box, Typography, Rating, CardMedia, TextField } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import React from "react";
import InputField from "../ui/inpu-field/InputField";
import Button from "../ui/button/Button";
import Image from "next/image";

const ReviewForm = () => {
  return (
    <Box className="bg-[#FCECEB] px-4 py-10 relative sm:mx-4 sm:px-8 lg:w-1/3 h-min">
      <CardMedia className="w-[50%] absolute -bottom-4 right-0 sm:w-[50%] lg:-bottom-2">
        <Image
          src="/assets/img/comment-form-decor.png"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt=""
        />
      </CardMedia>
      <CardMedia className="w-[50%] absolute -bottom-4 right-0 sm:w-[50%] lg:-bottom-2">
        <Image
          src="/assets/img/subscribe-img.png"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt=""
        />
      </CardMedia>
      <Box className="space-y-5">
        <Typography variant="h4" className="font-elegant">
          Leave A Review
        </Typography>
        <Typography variant="body1">
          Your email address will not be published.
        </Typography>
      </Box>
      <Box className="mt-10">
        <Rating icon={<AiFillStar className="text-white" />} value={5} />
        <Box className="space-y-4 mt-4" component="form">
          <InputField
            placeholder="Enter your name"
            name="name"
            id="name"
            type="text"
            fullWidth
          />
          <InputField
            placeholder="Enter your email"
            name="email"
            id="email"
            type="email"
            fullWidth
          />
          <TextField
            placeholder="Enter your review"
            multiline
            minRows={5}
            fullWidth
            sx={{
              bgcolor: "white",
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
          <Button type="submit" title="Send" classes="w-[140px]" />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewForm;

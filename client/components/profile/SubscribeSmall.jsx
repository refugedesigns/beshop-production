import React from "react";
import Image from "next/image"
import { Box, CardMedia, Stack, TextField, Typography } from "@mui/material";
import Button from "../ui/button/Button";

const SubscribeSmall = () => {
  return (
    <Stack className="bg-[#FCECEB] p-4  md:py-12 relative">
      <CardMedia className="absolute -bottom-[.5rem] right-0 overflow-hidden h-auto w-[60%] sm:w-[50%] object-bottom lg:h-auto lg:w-[90%] lg:-bottom-[.5rem]">
        <Image
          src="/assets/img/subscribe-img-decor-sm.png"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt=""
        />
      </CardMedia>
      <Typography variant="h2" className="font-elegant text-center text-3xl md:text-5xl">
        Stay In Touch
      </Typography>
      <Box className="mt-8 space-y-4 md:w-[90%] mx-auto">
        <TextField
          name="subscribe"
          id="subscribe"
          placeholder="Enter your email"
          fullWidth
          variant="outlined"
          className="z-40"
          sx={{
            "& fieldset": {
              border: "none",
              borderRadius: 0,
            },
            "&.Mui-focused fieldset": {
              border: "1px solid black",
            },
          }}
          inputProps={{
            sx: {
              bgcolor: "white",
            },
          }}
        />
        <Button title="Subscribe" classes="w-full" />
      </Box>
    </Stack>
  );
};

export default SubscribeSmall;

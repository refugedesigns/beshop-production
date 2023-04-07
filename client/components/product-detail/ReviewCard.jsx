import React from "react";
import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ReviewCard = ({ profileImage, username, date, rating, text }) => {

  return (
    <Box className="p-2 py-4 border-solid border-[#eee] border-[.5px]">
      <Box className="flex justify-between align-start sm:justify-start sm:align-center">
        <Stack
          alignItems={{ xs: "center" }}
          spacing={2}
          direction={{ xs: "row" }}
        >
          <Avatar className="">
            <Image
              src={profileImage}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-full"
              alt={`image of ${username}`}
            />
          </Avatar>
          <Typography variant="body1">{username}</Typography>
        </Stack>
        <Stack alignItems={{sm:'center'}} direction={{sm: "row"}} className="space-y-2 mt-6 sm:space-y-0 sm:mt-0">
          <Typography variant="body2" className="text-gray-500 sm:px-8 sm:mx-4 sm:border sm:border-solid sm:border-t-0 sm:border-b-0 sm:border-[#eee]">{date}</Typography>
          <Rating className="" size="small" name="read-only" value={rating} readOnly />
        </Stack>
      </Box>
      <Typography variant="body1" className="mt-4 text-gray-500">{text}</Typography>
    </Box>
  );
};

export default ReviewCard;

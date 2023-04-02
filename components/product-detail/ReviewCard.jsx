import React from "react";
import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ReviewCard = ({ profileImage, username, date, rating, text }) => {
  return (
    <Box>
      <Stack>
        <Avatar
          src={
            <Image
              src={profileImage}
              width="0"
              height="0"
              sizes="100vw"
              alt={`image of ${username}`}
            />
          }
          className="w-full h-auto"
        />
        <Typography variant="body1">{username}</Typography>
        <Typography variant="body1">{date}</Typography>
        <Rating name="read-only" value={rating} readOnly />
      </Stack>
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
};

export default ReviewCard;

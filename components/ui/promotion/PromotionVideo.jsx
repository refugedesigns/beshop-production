import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Typography, Box } from "@mui/material";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const PromotionVideo = ({ playing, title, setPlaying, classes, videoUrl, thumbnail }) => {
  return (
    <React.Fragment>
      <Box component="div" className={classes}>
        <Typography
          variant="h4"
          className={`absolute z-30 font-elegant text-2xl xs:text-4xl md:text-5xl text-white top-32 left-1/2 whitespace-nowrap transform -translate-y-1/2 -translate-x-1/2 ${
            playing ? "hidden" : "block"
          }`}
        >
          {title}
        </Typography>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          onClickPreview={() => setPlaying(true)}
          light={
            <Box className="relative w-full h-full">
              <Image
                src={thumbnail}
                alt="Video Thumbnail"
                fill
                className="absolute object-cover"
              />{" "}
              <Box className="w-full h-full bg-gray-800 absolute opacity-50" />
            </Box>
          }
        />
      </Box>
    </React.Fragment>
  );
};

export default PromotionVideo;

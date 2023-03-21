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
          className={`absolute z-30 font-elegant text-white top-60 left-1/2 whitespace-nowrap transform -translate-y-1/2 -translate-x-1/2 ${
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
            <Box>
              <Image
                src={thumbnail}
                alt="Video Thumbnail"
                fill
                className="absolute object-cover"
              />{" "}
            </Box>
          }
        />
      </Box>
    </React.Fragment>
  );
};

export default PromotionVideo;

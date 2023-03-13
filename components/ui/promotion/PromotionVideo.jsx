import React from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";

const PromotionVideo = ({ play, videoUrl, onVideoPlay, image }) => {
  return (
    <React.Fragment>
      <Box className="h-full w-full">
        {/* <Image src={image} fill alt="" /> */}
        <iframe
          autoPlay
          src={videoUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        ></iframe>
        {!play && (
          <Box>
            <Typography>Promo Video</Typography>
            <Box onClick={onVideoPlay}>
              <Image src="/assets/img/play-btn.png" alt="" fill />
            </Box>
          </Box>
        )}
      </Box>
    </React.Fragment>
  );
};

export default PromotionVideo;

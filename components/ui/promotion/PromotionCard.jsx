import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { Box, CardMedia, Typography } from "@mui/material";
import { HiOutlineVideoCamera } from "react-icons/hi";
import Button from "../button/Button";
import StyledTitle from "../styled-text/StyledTitle";
import thumbnail from "../../../public/assets/img/info-item-img2.jpg";
import Image from "next/image";

const PromotionCard = ({
  backgroundUrl,
  styledTitle,
  bigTitle,
  videoUrl,
  except,
  shortText,
  button,
  isPicture,
  isText,
  isAbout,
  isVideo,
  styledClasses,
  classes,
}) => {
  const [playing, setPlaying] = useState(false);
  return (
    <React.Fragment>
      {isText && (
        <Box className={classes}>
          <StyledTitle title={styledTitle} classes={styledClasses} />
          <Box className="space-y-6 mb-8">
            <Typography variant="h4" className="font-elegant max-w-[20rem] md:text-5xl md:max-w-[28rem]">
              {bigTitle}
            </Typography>
            <Typography variant="h6" className="font-elegant max-w-[32rem]">
              {except}
            </Typography>
            <Typography variant="body1" className="font-elegant text-gray-500 max-w-lg">
              {shortText}
            </Typography>
          </Box>
          {button && <Button title="Shop Now" />}
          {isAbout && (
            <Box className="flex justify-center lg:justify-start items-center space-x-3 hover:cursor-pointer">
              <HiOutlineVideoCamera className="h-6 w-6 text-gray-700" />
              <Typography
                variant="body1"
                className="uppercase text-sm font-semibold text-gray-700"
              >
                Watch video about us
              </Typography>
              <Box className="h-4 w-10 relative">
                <Image
                  src={require("../../../public/assets/img/icons/arrow-lg2.svg")}
                  fill
                  alt="arrow right icon"
                  style={{ objectFit: "contain", position: "absolute" }}
                />
              </Box>
            </Box>
          )}
        </Box>
      )}
      {isPicture && (
        <Box className={classes}>
          <CardMedia component="img" image={backgroundUrl} className="md:h-full" />
        </Box>
      )}

      {isVideo && (
        <Box component="div" className={classes}>
          {/* <Image src="/assets/img/info-item-img2.jpg" alt="Video Thumbnail" /> */}
          <Typography
            variant="h4"
            className={`absolute z-30 font-elegant text-white top-40 left-1/2 whitespace-nowrap transform -translate-y-1/2 -translate-x-1/2 ${
              playing ? "hidden" : "block"
            }`}
          >
            Promo Video
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
                  src="/assets/img/info-item-img2.jpg"
                  alt="Video Thumbnail"
                  fill
                  className="absolute object-cover"
                />{" "}
              </Box>
            }
          />
        </Box>
      )}
    </React.Fragment>
  );
};

export default PromotionCard;

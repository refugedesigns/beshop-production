import React, { useState } from "react";
import { useRouter } from "next/router";

import { Box, CardMedia, Typography } from "@mui/material";
import { HiOutlineVideoCamera } from "react-icons/hi";
import Button from "../button/Button";
import StyledTitle from "../styled-text/StyledTitle";
import Image from "next/image";
import PromotionVideo from "./PromotionVideo";

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
  handleButtonClick,
}) => {
  const [playing, setPlaying] = useState(false);
  const router = useRouter()
  return (
    <React.Fragment>
      {isText && (
        <Box className={classes}>
          <StyledTitle title={styledTitle} classes={styledClasses} />
          <Box className="space-y-6 mb-8">
            <Typography
              variant="h4"
              className="font-elegant max-w-[20rem] md:text-5xl md:max-w-[28rem]"
            >
              {bigTitle}
            </Typography>
            <Typography variant="h6" className="font-elegant max-w-[32rem]">
              {except}
            </Typography>
            <Typography
              variant="body1"
              className="font-elegant text-gray-500 max-w-lg"
            >
              {shortText}
            </Typography>
          </Box>
          {button && <Button onClick={handleButtonClick} title="Shop Now" />}
          {isAbout && (
            <Box onClick={() => router.push("/about")} className="flex justify-center lg:justify-start items-center space-x-3 hover:cursor-pointer">
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
          <CardMedia
            component="img"
            image={backgroundUrl}
            className="md:h-full"
          />
        </Box>
      )}

      {isVideo && (
        <PromotionVideo
          videoUrl={videoUrl}
          classes={classes}
          title="Promotion Video"
          setPlaying={() => setPlaying(true)}
          thumbnail="/assets/img/info-item-img2.jpg"
          playing={playing}
        />
      )}
    </React.Fragment>
  );
};

export default PromotionCard;

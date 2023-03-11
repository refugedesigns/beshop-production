import React from "react";

import { Box, CardMedia, Typography } from "@mui/material";
import Button from "../button/Button";

const PromotionCard = ({
  backgroundUrl,
  styledTitle,
  bigTitle,
  videoUrl,
  except,
  shortText,
  button,
  firstIcon,
  secondIcon,
  iconText,
  videoIcon,
  isPicture,
  isText,
  isVideo,
  classes,
}) => {
  return (
    <React.Fragment>
      {isText && (
        <Box
          className={`${backgroundUrl ? `md:${backgroundUrl}` : `${classes}`}`}
        >
          <Typography>{styledTitle}</Typography>
          <Typography variant="h6">{bigTitle}</Typography>
          <Typography>{except}</Typography>
          <Typography variant="body1">{shortText}</Typography>
          {button && <Button title="Shop Now" />}
          {iconText && (
            <Box>
              <Typography variant="body1">{firstIcon}</Typography>
              <Typography variant="body1">{iconText}</Typography>
              <Typography variant="body1">{secondIcon}</Typography>
            </Box>
          )}
        </Box>
      )}
      {isPicture && (
        <Box>
          <CardMedia component="img" image={backgroundUrl} height="full" />
        </Box>
      )}

      {isVideo && (
        <Box>
          <Box>{videoIcon}</Box>
          <Box>{videoUrl}</Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default PromotionCard;

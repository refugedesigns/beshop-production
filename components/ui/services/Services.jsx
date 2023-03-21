import Image from "next/image";
import { Box, CardMedia, Stack, Typography } from "@mui/material";

const Services = ({ title, excerpt, imageIcon }) => {
  return (
    <Stack
      direction="row"
      spacing={3}
      className="p-4 bg-[#faf9ff] border-solid border-[1px] border-[#eee]"
    >
      <Box className="relative w-min">
        <CardMedia className="w-16 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src="/assets/img/main-text-decor.svg"
            width="0"
            height="0"
            sizes="100vw"
            alt=""
            className="w-full h-auto z-10"
          />
        </CardMedia>
        <CardMedia className="w-10 z-20">
          <Image
            src={imageIcon}
            width="0"
            height="0"
            sizes="100vw"
            alt=""
            className="w-full h-auto z-20"
          />
        </CardMedia>
      </Box>
      <Stack>
        <Typography className="whitespace-nowrap">{title}</Typography>
        <Typography className="whitespace-nowrap">{excerpt}</Typography>
      </Stack>
    </Stack>
  );
};

export default Services;

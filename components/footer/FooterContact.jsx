import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMobile } from "react-icons/ai";
import { HiOutlineEnvelope } from "react-icons/hi2";

const FooterContact = () => {
  return (
    <Box>
      <Typography variant="h6" className="font-elegant text-white">
        Contact
      </Typography>
      <Stack direction="row" alignItems="start" justifyContent="start" spacing={2} className="pt-4">
        <CiLocationOn className="p-1 h-16 w-16 lg:h-8 lg:w-8 text-gray-400" />
        <Typography
          variant="p"
          component="address"
          className="font-lato text-normal  text-gray-400 max-w-[10rem]"
        >
          23rd Road St, New Orleans, NY 10034, USA
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="start" justifyContent="start" spacing={1}>
        <AiOutlineMobile className="h-8 w-8 text-gray-400 pt-2 " />
        <Stack>
          <Typography
            variant="p"
            component="address"
            className="font-lato text-normal pt-2 text-gray-400"
          >
            +134-5675-35556
          </Typography>
          <Typography
            variant="p"
            component="address"
            className="font-lato text-normal pt-2 text-gray-400"
          >
            +134-5675-3656
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="start" justifyContent="start" spacing={1}>
        <HiOutlineEnvelope className="h-8 w-8 text-gray-400 pt-3" />
        <Typography
          variant="p"
          component="address"
          className="font-lato text-normal pt-3 text-gray-400"
        >
          info@goshop.com
        </Typography>
      </Stack>
    </Box>
  );
};

export default FooterContact;

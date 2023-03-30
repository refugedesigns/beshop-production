import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "../social-icon/SocialIcon";

const ContactSocial = () => {
  return (
    <Box>
      <Typography variant="body2" className="text-stone-500 mb-2">
        Find us here:
      </Typography>
      <Stack direction="row" spacing={1}>
        <SocialIcon
          buttonClasses="bg-[#faf9ff] border-solid border-[1px] border-[#eee] hover:bg-black"
          iconClasses="text-gray-800 hover:text-white"
          Icon={CgFacebook}
        />
        <SocialIcon
          buttonClasses="bg-[#faf9ff] border-solid border-[1px] border-[#eee] hover:bg-black"
          iconClasses="text-gray-800 hover:text-white"
          Icon={BsTwitter}
        />
        <SocialIcon
          buttonClasses="bg-[#faf9ff] border-solid border-[1px] border-[#eee] hover:bg-black"
          iconClasses="text-gray-800 hover:text-white"
          Icon={BsInstagram}
        />
        <SocialIcon
          buttonClasses="bg-[#faf9ff] border-solid border-[1px] border-[#eee] hover:bg-black"
          iconClasses="text-gray-800 hover:text-white"
          Icon={FaLinkedinIn}
        />
      </Stack>
    </Box>
  );
};

export default ContactSocial;

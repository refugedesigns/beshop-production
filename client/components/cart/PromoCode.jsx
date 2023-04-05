import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "../ui/button/Button";
import SocialIcon from "../ui/social-icon/SocialIcon";
import ContactSocial from "../ui/social/ContactSocial";

const PromoCode = () => {
  return (
    <Box className="lg:flex-1">
      <Box className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <TextField
          name="promoCode"
          id="promoCode"
          type="text"
          fullWidth
          sx={{
            "& fieldset": {
              border: "1px solid #FCECEB",
              borderRadius: 0,
            },
          }}
        />
        <Button title="Apply Code" classes="w-full whitespace-nowrap md:w-auto" />
      </Box>
      <Box className="mt-6 space-y-3">
        <Typography variant="h5" className="font-elegant">How To Get A Promo Code?</Typography>
        <Typography variant="body2" className="font-lato text-gray-500">
          Follow our news on the website, as well as subscribe to our social
          networks. So you will not only be able to receive up-to-date codes,
          but also learn about new products and promotional items.
        </Typography>
      </Box>
      <Box className="mt-4">
        <ContactSocial />
      </Box>
    </Box>
  );
};

export default PromoCode;

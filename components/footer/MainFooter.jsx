import React from "react";
import { Stack, Box, Divider } from "@mui/material";

import FooterSocial from "./FooterSocial";
import FooterPayments from "./FooterPayments";
import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterRights from "./FooterRights";

import footerNavs from "../../data/footer/footerNav";

const MainFooter = () => {
  return (
    <Box component="footer" className="bg-stone-800">
      <Stack maxWidth="lg" className="pt-10 mx-auto md:pt-20">
        <Box className="space-y-5 flex flex-col items-center mb-10 md:flex-row md:justify-between md:space-y-0 md:space-x-5 md:mx-6">
          <Box className="order-2">
            <FooterSocial />
          </Box>
          <Box className="order-1 md:order-2">
            <FooterLogo />
          </Box>
          <Box className="order-3 md:px-6">
            <FooterPayments />
          </Box>
        </Box>
        <Divider className="bg-gray-600 mx-4" />
        <Box sx={{ flexGrow: 1 }} className="flex flex-wrap my-10 md:mx-4">
          {footerNavs?.map((navItem, index) => (
            <Box className="w-1/2 md:w-1/4" key={index}>
              <FooterLinks linkGroup={navItem} />
            </Box>
          ))}
          <Box className="w-1/2 md:w-1/4">
            <FooterContact />
          </Box>
        </Box>
        <Divider className="bg-gray-600 mx-4" />
        <Box className="my-10">
          <FooterRights />
        </Box>
      </Stack>
    </Box>
  );
};

export default MainFooter;

import React from "react";
import { Box, Typography } from "@mui/material";
import FooterLinkItem from "./FooterLinkItem";

const FooterLinks = ({ linkGroup }) => {
  return (
    <Box>
      <Typography variant="h6" className="font-elegant text-white mb-4">
        {linkGroup?.title}
      </Typography>
      <Box className="mb-4">
        {linkGroup?.navLinks.map((link, index) => (
          <FooterLinkItem key={index} link={link.path} title={link.name} />
        ))}
      </Box>
    </Box>
  );
};

export default FooterLinks;

import React from "react";
import Link from "next/link";

import { Typography, Box, CardMedia } from "@mui/material";
import { RiSearch2Line } from "react-icons/ri";
import InputField from "../ui/inpu-field/InputField";
import Button from "../ui/button/Button";
import Image from "next/image";

const NotFound = () => {
  return (
    <Box className="mt-16 flex flex-col items-center lg:flex-row lg:justify-center">
      <Box className="space-y-6 w-full">
        <Box className="lg:flex lg:items-end">
          <Typography variant="h1" className="font-elegant">404</Typography>
          <Typography variant="h5" className="font-elegant text-4xl pb-4">Page Not Found</Typography>
        </Box>
        <Typography variant="body2" className="text-gray-500">Please try Search or go back to <Link className="no-underline text-style-color hover:opacity-80" href="/">Homepage</Link></Typography>
        <Box className="flex">
          <InputField
            name="search"
            id="search"
            type="text"
            aria-label="Search"
            placeholder="Search"
            fullWidth

          />
          <Button title={<RiSearch2Line className="h-6 w-6" />} classes="w-min" />
        </Box>
      </Box>
      <CardMedia className="w-[80%]">
        <Image
          src="/assets/img/error-img.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="error image"
          className="w-full h-auto"
        />
      </CardMedia>
    </Box>
  );
};

export default NotFound;

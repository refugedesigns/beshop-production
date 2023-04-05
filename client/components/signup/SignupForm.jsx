import React from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { CgFacebook } from "react-icons/cg";
import { FaGooglePlusG } from "react-icons/fa";
import Button from "../ui/button/Button";
import InputField from "../ui/inpu-field/InputField";
import Link from "next/link";

const SignupForm = () => {
  return (
    <Container className="bg-[url('/assets/img/login-form__bg.png')] bg-no-repeat bg-cover border border-solid border-[#eee] my-20 py-16 px-4 sm:px-12 z-10 max-w-3xl">
      <Typography variant="h4" className="font-elegant text-center md:text-5xl">
        Register Now
      </Typography>
      <Box className="mx-auto w-full flex justify-center space-x-3 items-center mt-10">
        <IconButton className="bg-[#3b5999] rounded-none hover:bg-opacity-80">
          <CgFacebook className="text-white" />
        </IconButton>
        <IconButton className="bg-[#dd4b39] rounded-none hover:bg-opacity-80">
          <FaGooglePlusG className="text-white" />
        </IconButton>
      </Box>
      <Box component="form" className="mx-auto mt-6">
        <Box className="lg:flex lg:space-x-4 mb-2 lg:mb-4">
          <InputField
            id="firstName"
            name="firstName"
            type="text"
            aria-label="firstName"
            placeholder="Enter your first name"
            className="w-full lg:w-auto lg:flex-1 mb-2 lg:mb-0"
          />
          <InputField
            id="lastName"
            name="lastName"
            type="text"
            aria-label="lastName"
            placeholder="Enter your last name"
            className="w-full lg:w-auto lg:flex-1"
          />
        </Box>
        <Box className="lg:flex lg:space-x-4">
          <InputField
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            aria-label="phoneNumber"
            placeholder="Enter your phone number"
            className="w-full lg:w-auto lg:flex-1 mb-2 lg:mb-0"
          />
          <InputField
            id="email"
            name="email"
            type="email"
            aria-label="email"
            placeholder="Enter your email"
            className="w-full lg:w-auto lg:flex-1"
          />
        </Box>
        <Box className="mt-2 lg:mt-10">
          <Typography variant="body1" className="mb-3 font-elegant text-xl">
            Password
          </Typography>
          <Box className="lg:flex lg:space-x-4 mb-10">
            <InputField
              id="password"
              name="password"
              type="password"
              aria-label="password"
              placeholder="Enter your password"
              className="w-full lg:w-auto lg:flex-1 mb-2 lg:mb-0"
            />
            <InputField
              id="password"
              name="password"
              type="password"
              aria-label="password"
              placeholder="Confirm password"
              className="w-full lg:w-auto lg:flex-1"
            />
          </Box>
        </Box>
        <Button title="Register" classes="w-full" />
      </Box>
      <Typography variant="body1" className="font-lato mt-4">
        Already have an account?{" "}
        <Link
          className="no-underline text-style-color hover:opacity-80"
          href="/login"
        >
          Log in
        </Link>
      </Typography>
    </Container>
  );
};

export default SignupForm;

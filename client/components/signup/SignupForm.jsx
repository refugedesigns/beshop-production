import React from "react";
import { useDispatch } from "react-redux";
import { useSignupUserMutation } from "@/store/userSlice";
import { Box, Typography, Container, IconButton } from "@mui/material";
import { CgFacebook } from "react-icons/cg";
import { FaGooglePlusG } from "react-icons/fa";

import { Formik } from "formik";
import * as yup from "yup";

import Button from "../ui/button/Button";
import InputField from "../ui/inpu-field/InputField";
import Link from "next/link";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required!"),
  lastName: yup.string().required("Last name is required!"),
  phoneNumber: yup
    .string()
    .required("Phone number is required!")
    .matches(phoneRegExp, "Phone number is not valid!"),
  email: yup.string().required("Email is required!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(8, "Password should be a minimum of 8 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Both password need to be the same"),
});

const SignupForm = () => {
  const dispatch = useDispatch();
  const [signup, { isLoading, isError, isSuccess, isUninitialized, data, error }] =
    useSignupUserMutation();
  const initialsValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  let content;

  if (isUninitialized || isLoading || isError) {

    content = (
      <Formik
        initialValues={initialsValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setSubmitting(false);
          signup(values)
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          isSubmitting,
        }) => (
          <Container className="bg-[url('/assets/img/login-form__bg.png')] bg-no-repeat bg-cover border border-solid border-[#eee] my-20 py-16 px-4 sm:px-12 z-10 max-w-3xl">
            {isError && <Typography variant="h6" className="text-center p-4 rounded-lg bg-red-200 text-red-500 mb-4">{error.data.msg}</Typography>}
            <Typography
              variant="h4"
              className="font-elegant text-center md:text-5xl"
            >
              Register Now
            </Typography>
            <Box>
              <Box className="mx-auto w-full flex justify-center space-x-3 items-center mt-10">
                <IconButton className="bg-[#3b5999] rounded-none hover:bg-opacity-80">
                  <CgFacebook className="text-white" />
                </IconButton>
                <IconButton className="bg-[#dd4b39] rounded-none hover:bg-opacity-80">
                  <FaGooglePlusG className="text-white" />
                </IconButton>
              </Box>
              <Box
                onSubmit={handleSubmit}
                component="form"
                className="mx-auto mt-6"
              >
                <Box className="lg:flex lg:space-x-4 mb-2 lg:mb-4">
                  <InputField
                    id="firstName"
                    name="firstName"
                    type="text"
                    aria-label="firstName"
                    placeholder="Enter your first name"
                    className="w-full lg:w-auto lg:flex-1 mb-2 lg:mb-0"
                    helperText={touched.firstName ? errors.firstName : ""}
                    error={touched.firstName && Boolean(errors.firstName)}
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  <InputField
                    id="lastName"
                    name="lastName"
                    type="text"
                    aria-label="lastName"
                    placeholder="Enter your last name"
                    className="w-full lg:w-auto lg:flex-1"
                    helperText={touched.lastName ? errors.lastName : ""}
                    error={touched.lastName && Boolean(errors.lastName)}
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </Box>
                <Box className="lg:flex lg:space-x-4">
                  <InputField
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    aria-label="phoneNumber"
                    placeholder="Enter your phone number"
                    className="w-full lg:w-auto lg:flex-1 mb-2 lg:mb-0"
                    helperText={touched.phoneNumber ? errors.phoneNumber : ""}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  <InputField
                    id="email"
                    name="email"
                    type="email"
                    aria-label="email"
                    placeholder="Enter your email"
                    className="w-full lg:w-auto lg:flex-1"
                    helperText={touched.email ? errors.email : ""}
                    error={touched.email && Boolean(errors.email)}
                    value={values.email}
                    onChange={handleChange}
                  />
                </Box>
                <Box className="mt-2 lg:mt-10">
                  <Typography
                    variant="body1"
                    className="mb-3 font-elegant text-xl"
                  >
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
                      helperText={touched.password ? errors.password : ""}
                      error={touched.password && Boolean(errors.password)}
                      value={values.password}
                      onChange={handleChange}
                    />
                    <InputField
                      id="confirmPassword"
                      name="confirmPassword"
                      type="confirmPassword"
                      aria-label="confirm password"
                      placeholder="Confirm password"
                      className="w-full lg:w-auto lg:flex-1"
                      helperText={
                        touched.confirmPassword ? errors.confirmPassword : ""
                      }
                      error={
                        touched.confirmPassword &&
                        Boolean(errors.confirmPassword)
                      }
                      value={values.confirmPassword}
                      onChange={handleChange}
                    />
                  </Box>
                </Box>
                <Button
                  disabled={isSubmitting || isLoading}
                  title="Register"
                  classes="w-full disabled:opacity-50 text-white"
                  type="submit"
                />
              </Box>
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
        )}
      </Formik>
    );
  } else if (isSuccess) {
    content = (
      <Container className="bg-[url('/assets/img/login-form__bg.png')] bg-no-repeat bg-cover border border-solid border-[#eee] my-20 py-16 px-4 sm:px-12 z-10 max-w-3xl">
        <Typography variant="h3" className="font-lato text-center bg-green-200 text-green-600 p-6 rounded-lg">
          {data.msg}
        </Typography>
      </Container>
    );
  } else if (isError) {
    
  }

  return content;
};

export default SignupForm;

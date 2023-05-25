import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  IconButton,
  Checkbox,
  Container,
  FormControlLabel
} from "@mui/material";
import  {  useSignInUserMutation } from "../../store/userSlice"
import { CgFacebook } from "react-icons/cg";
import { FaGooglePlusG } from "react-icons/fa";
import { RiCheckboxBlankLine, RiCheckboxBlankFill } from "react-icons/ri";
import Button from "../ui/button/Button";
import InputField from "../ui/inpu-field/InputField";
import Link from "next/link";

import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().required("Email is required!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(8, "Password should be a minimum of 8 characters long"),
});

const LoginForm = () => {
  const router = useRouter()
  const [signin, {data, isError, isSuccess, isLoading, error}] = useSignInUserMutation()
  const initialValues = {
    email : "",
    password: "",
  }
  if(isSuccess) {
    if(router.query.redirect) {
      console.log(router.query)
     router.replace(`/${router.query.redirect}`)
    }else {
      router.replace("/shop")
    }
  }

  if(isError) {
    console.log(error)
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setSubmitting(false);
        signin(values)
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
        <Container
          maxWidth="sm"
          component="section"
          className="bg-[url('/assets/img/login-form__bg.png')] bg-no-repeat bg-cover border border-solid border-[#eee] my-20 py-16 px-4 sm:px-12 z-10"
        >
          {isError && <Typography className="text-center my-5 bg-red-200 text-xl text-red-500 py-3 px-6 rounded-lg">{error?.data?.msg}</Typography> }
          <Typography
            variant="h3"
            className="text-center font-elegant text-3xl md:text-5xl"
          >
            Log In With
          </Typography>
          <Box className="mx-auto w-full flex justify-center space-x-3 items-center mt-10">
            <IconButton className="bg-[#3b5999] rounded-none hover:bg-opacity-80">
              <CgFacebook className="text-white" />
            </IconButton>
            <IconButton className="bg-[#dd4b39] rounded-none hover:bg-opacity-80">
              <FaGooglePlusG className="text-white" />
            </IconButton>
          </Box>
          <Box
            component="form"
            className="flex flex-col items-start space-y-4 mt-6"
            onSubmit={handleSubmit}
          >
            <InputField
              name="email"
              id="email"
              aria-label="email"
              placeholder="Enter your email address"
              type="email"
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
              fullWidth
              sx={{
                "& fieldset": {
                  border: "1px solid #FCECEB",
                  borderRadius: 0,
                },
              }}
              inputProps={{
                sx: {
                  bgcolor: "white",
                },
              }}
            />
            <InputField
              name="password"
              id="password"
              aria-label="password"
              placeholder="Enter your password address"
              type="password"
              fullWidth
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              onChange={handleChange}
              sx={{
                "& fieldset": {
                  border: "1px solid #FCECEB",
                  borderRadius: 0,
                },
              }}
              inputProps={{
                sx: {
                  bgcolor: "white",
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<RiCheckboxBlankLine className="h-5 w-5" />}
                  checkedIcon={<RiCheckboxBlankFill className="h-5 w-5" />}
                  aria-label="Remember me"
                  className=" "
                />
              }
              label={
                <Typography variant="body1" className="text-gray-500">
                  Remember me
                </Typography>
              }
              className="pt-8"
            />

            <Button disabled={isSubmitting || isLoading } type="submit" title="Login" classes="w-full disabled:text-white disabled:opacity-70" />
          </Box>
          <Box className="flex justify-between mt-8">
            <Typography variant="body2">
              No account ?
              <Link
                className="no-underline text-style-color hover:opacity-80"
                href="/signup"
              >
                {" "}
                Register now
              </Link>
            </Typography>
            <Link
              className="no-underline text-style-color hover:opacity-80"
              href="/forgot-password"
            >
              <Typography variant="body2">Lost your password?</Typography>
            </Link>
          </Box>
        </Container>
      )}
    </Formik>
  );
};

export default LoginForm;

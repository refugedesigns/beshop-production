import React, { Fragment } from "react";
import Banner from "@/components/ui/banner/Banner";
import PageDecor from "@/components/ui/page-decor/PageDecor";
import { Box, Container, Card, Typography } from "@mui/material";
import { useForgotPasswordMutation } from "@/store/userSlice";
import { Formik } from "formik";
import * as yup from "yup";
import InputField from "@/components/ui/inpu-field/InputField";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import NextHead from "@/components/ui/Head/Head";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

const ForgortPasswordPage = () => {
  const [forgotPassword, { data, isLoading, isSuccess }] =
    useForgotPasswordMutation();

    let content = (
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: "",
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const payload = await forgotPassword(values.email);
            console.log(payload);
            setSubmitting(false);
          } catch (error) {
            console.setSubmitting(false);
          }
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
          <Card className="h-80 my-10 px-6 pt-6">
            <Typography variant="h5" className="text-center">
              Forgot Password
            </Typography>
            <Box
              onSubmit={handleSubmit}
              component="form"
              className="my-5 space-y-5"
            >
              <InputField
                fullWidth
                placeholder="Enter your email address"
                name="email"
                id="email"
                type="email"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                value={values.email}
                onChange={handleChange}
              />
              <Button
                type="submit"
                title="Get Reset Password Link"
                classes="whitespace-nowrap w-full disabled:text-white disabled:opacity-70"
                disabled={isSubmitting}
              />
            </Box>
            <Typography>
              Already have an account? <Link href="/login">Log In</Link>
            </Typography>
          </Card>
        )}
      </Formik>
    );
  if (isSuccess) {
   content = (
     <Card className="h-80 my-10 px-6 pt-6">
       <Box className="p-4 bg-green-200 rounded-lg flex justify-center items-center">
         <Typography variant="h6" className="text-green-500 p-4">
           {data?.msg}
         </Typography>
       </Box>
     </Card>
   );
  }
  return (
    <Fragment>
      <NextHead title="GoShop - Forgot Password" description="GoShop Forgo Password" />
      <Banner
        pageTitle="Forgot Password"
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Forgot Password" },
        ]}
      />
      <PageDecor />
      <Container maxWidth="sm">
        {content}
      </Container>
    </Fragment>
  );
};

export default ForgortPasswordPage;

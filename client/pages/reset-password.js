import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Banner from "@/components/ui/banner/Banner";
import PageDecor from "@/components/ui/page-decor/PageDecor";
import { Box, Container, Card, Typography } from "@mui/material";
import { useResetPasswordMutation } from "@/store/userSlice";
import { Formik } from "formik";
import * as yup from "yup";
import { Puff } from "react-loader-spinner";
import InputField from "@/components/ui/inpu-field/InputField";
import Button from "@/components/ui/button/Button";

const validationSchema = yup.object({
  password: yup
    .string()
    .required("Password field is required").min(8, "Password must be at least 8 characters"),
});

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(true);
  const [resetPassword, { isLoading, isError, isSuccess, data }] =
    useResetPasswordMutation();
  const router = useRouter();

  useEffect(() => {
    if (router.query.token && router.query.email) {
      setLoading(false);
    } 

    if(!loading && !router.query.token) {
      router.replace("/")
    }
  }, [router.query, loading]);
  let content = (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        password: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        console.log(values);
        if (router.query.token && router.query.email) {
          try {
            const resetInfo = {
              email: router.query.email,
              token: router.query.token,
              password: values.password,
            };

            const payload = await resetPassword(resetInfo);
            console.log(payload);
            setSubmitting(false);
          } catch (error) {
            console.log(error);
            setSubmitting(false);
          }
        }
      }}
    >
      {({
        handleChange,
        handleSubmit,
        errors,
        values,
        touched,
        isSubmitting,
      }) => (
        <Card className="h-80 my-10 px-6 pt-6">
          <Typography variant="h5" className="text-center">
            New Password
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component="form"
            className="my-5 space-y-5"
          >
            <InputField
              fullWidth
              name="password"
              id="password"
              type="password"
              placeholder="Enter a new password"
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              onChange={handleChange}
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              title="Change Your Password"
              classes="whitespace-nowrap w-full disabled:text-white disabled:opacity-70"
            />
          </Box>
        </Card>
      )}
    </Formik>
  );

  if (loading) {
    <Box className="min-h-screen flex justify-center items-center">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#d05278"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>;
  }

  if (isSuccess) {
    content = (
      <Card className="h-80 my-10 px-6 pt-6">
        <Typography variant="h6" className="text-green-500 p-4 rounded-lg">
          {data?.msg}
        </Typography>
        <Box className="space-y-4 md:space-y-0 md:flex md:justify-center md:items-center mt-6 md:space-x-4">
          <Button 
          title="Login"
          onClick={() => router.replace("/login")}
          />
          <Button onClick={() => router.replace("/shop")} title="Continue Shopping" classes="whitespace-nowrap" />
        </Box>
      </Card>
    );
  }
  return (
    <Fragment>
      <Banner
        pageTitle="Forgot Password"
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Forgot Password" },
        ]}
      />
      <PageDecor />
      <Container maxWidth="sm">{content}</Container>
    </Fragment>
  );
};

export default ResetPasswordPage;

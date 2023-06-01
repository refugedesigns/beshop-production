import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useVerifyEmailMutation } from "@/store/userSlice";
import { BallTriangle } from "react-loader-spinner";
import Banner from "@/components/ui/banner/Banner";
import Button from "@/components/ui/button/Button";
import PageDecor from "@/components/ui/page-decor/PageDecor";
import { Container, Typography, Box } from "@mui/material";
import { verifyUserEmail } from "@/lib/verifyUserEmail";
import NextHead from "@/components/ui/Head/Head";

const VerifyEmailPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [verifyUserEmail, {data, isLoading, isSuccess, isError}] = useVerifyEmailMutation()
  
  useEffect(() => {
    if(router.query.token && router.query.email) {
      setLoading(false)
    }else {
      router.replace("/signup")
    }
  }, [router.query])

  useEffect(() => {
    const verifyEmail = async () => {
      const userInfo = {
        email: router.query.email,
        verificationToken: router.query.token
      }

      return verifyUserEmail(userInfo)
    }

    verifyEmail()
  }, [router.query])
  
  let content;
  if (isSuccess) {
    content = (
      <Box className="flex flex-col items-center space-y-10">
        <Typography
          variant="h3"
          className="text-center bg-green-200 p-4 rounded-lg text-green-600"
        >
          Account Confirmed
        </Typography>
        <Button onClick={() => router.replace("/login")} title="Please login" />
      </Box>
    );
  } else if (isError) {
    content = (
      <Box className="flex flex-col items-center space-y-10">
        <Typography
          variant="h3"
          className="text-center bg-red-200 text-red-500 p-4 rounded-lg"
        >
          Verification Failed!
        </Typography>
        <Button onClick={() => router.replace("/signup")} title="Signup" />
      </Box>
    );
  } else if (loading || isLoading) {
    content = (
      <Box className="flex flex-col items-center space-y-10">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </Box>
    );
  }
  return (
    <Fragment>
      <NextHead title="GoShop - Verify Email" description="GoShop Verify Email Page" />
      <PageDecor />
      <Banner pageTitle="Email Verification" />
      <Container maxWidth="lg" className="flex-1 h-[300px] my-10">
        {content}
      </Container>
    </Fragment>
  );
};

export default VerifyEmailPage;



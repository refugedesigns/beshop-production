import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BallTriangle } from "react-loader-spinner";
import Banner from "@/components/ui/banner/Banner";
import Button from "@/components/ui/button/Button";
import PageDecor from "@/components/ui/page-decor/PageDecor";
import { Container, Typography, Box } from "@mui/material";
import { verifyUserEmail } from "@/lib/verifyUserEmail";

const VerifyEmailPage = (verificationResult) => {
  const router = useRouter()
  let content;
  if (verificationResult.message === "Email verified successfully!") {
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
  } else if (verificationResult.message === "Verification Failed") {
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
  } else if (!verificationResult.message) {
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
      <PageDecor />
      <Banner pageTitle="Email Verification" />
      <Container maxWidth="lg" className="flex-1 h-[300px] my-10">
        {content}
      </Container>
    </Fragment>
  );
};

export default VerifyEmailPage;

export async function getServerSideProps(context) {
  console.log(context.query);
  const userInfo = {
    email: context.query.email,
    verificationToken: context.query.token,
  };

  if (!context.query.token && !context.query.email) {
    return {
      redirect: {
        destination: "/signup",
        permanent: true,
      },
    };
  }

  try {
    const res = await verifyUserEmail(userInfo);
    console.log(res);
    return {
      props: {
        message: res.msg,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        message: error.msg,
      },
    };
  }
}

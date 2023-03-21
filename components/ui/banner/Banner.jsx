import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Typography, Breadcrumbs, Container } from "@mui/material";

const Banner = ({ pageTitle, breadcrumbs }) => {
  const router = useRouter();

  return (
    <Box className="bg-[url('/assets/img/detail-main-bg-sm.jpg')] bg-center bg-cover sm:bg-[url('/assets/img/detail-main-bg.jpg')] sm:bg-center min-h-[400px]">
      <Container
        maxWidth="lg"
        className="pt-48 flex flex-col items-center"
      >
        <Typography variant="h2" className="font-elegant">
          {pageTitle}
        </Typography>
        <Breadcrumbs className="mt-6" separator="-">
          {breadcrumbs?.map((breadcrumb, index) => {
            return breadcrumb.link ? (
              <Link
                className="no-underline text-black hover:text-style-color"
                key={index}
                href={breadcrumb.link}
              >
                {breadcrumb.title}
              </Link>
            ) : (
              <Typography
              key={index}
                className={`${
                  router.pathname.split("/")[1].split(" ")[0] ===
                  breadcrumb.title.toLowerCase()
                    ? "text-style-color"
                    : ""
                }`}
                component="p"
              >
                {breadcrumb.title}
              </Typography>
            );
          })}
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default Banner;

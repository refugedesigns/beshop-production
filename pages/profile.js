import React, { Fragment } from "react";
import Banner from "@/components/ui/banner/Banner";
import { Box, Container, Grid } from "@mui/material";
import SubscribeSmall from "@/components/profile/SubscribeSmall";
import ViewedProducts from "@/components/ui/viewed-products/ViewedProducts";
import DiscountSmall from "@/components/profile/DiscountSmall";
import ProfileTabs from "@/components/profile/ProfileTabs";

const ProfilePage = () => {
  return (
    <Fragment>
      <Banner
        pageTitle="My Profile"
        breadcrumbs={[{ title: "Home", link: "/" }, { title: "My Profile" }]}
      />
      <Container className="my-20">
        <Grid container spacing={{ md: 4 }}>
          <Grid item lg={3} className="md:w-full order-2 lg:w-2/6 space-y-6 md:space-y-12 lg:space-y-16 mt-4 lg:mt-0">
            <SubscribeSmall />
            <ViewedProducts />
            <DiscountSmall />
          </Grid>
          <Grid item lg={9} className="w-full order-1 lg:order-2 lg:w-4/6">
            <ProfileTabs />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default ProfilePage;

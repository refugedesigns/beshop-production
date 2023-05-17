import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Banner from "@/components/ui/banner/Banner";
import { Container, Grid } from "@mui/material";
import { Puff } from "react-loader-spinner";
import SubscribeSmall from "@/components/profile/SubscribeSmall";
import ViewedProducts from "@/components/ui/viewed-products/ViewedProducts";
import DiscountSmall from "@/components/profile/DiscountSmall";
import ProfileTabs from "@/components/profile/ProfileTabs";
import SessionModal from "@/components/ui/modals/SessionModal";
import { selectCurrentUser } from "@/store/userSlice";

const ProfilePage = () => {
  const [isSessionTimeout, setIsSessionTimeout] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(selectCurrentUser);
  const router = useRouter();

  useEffect(() => {
    if (user._id) {
      setIsLoading(false);
    } else {
      router.push("/shop");
    }
  }, []);

  useEffect(() => {
    setIsSessionTimeout(!user._id)
  }, [isSessionTimeout, user._id])

  let content;

  if (isLoading) {
    content = (
      <Container
        maxWidth="lg"
        className="min-h-screen flex justify-center items-center"
      >
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
      </Container>
    );
  } else if (!isLoading) {
    content = (
      <Fragment>
        {isSessionTimeout && <SessionModal open={isSessionTimeout} />}
        <Banner
          pageTitle="My Profile"
          breadcrumbs={[{ title: "Home", link: "/" }, { title: "My Profile" }]}
        />
        <Container className="my-20">
          <Grid container spacing={{ md: 4 }}>
            <Grid
              item
              lg={3}
              className="md:w-full order-2 lg:w-2/6 space-y-6 md:space-y-12 lg:space-y-16 mt-4 lg:mt-0"
            >
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
  }
  return content;
};

export default ProfilePage;

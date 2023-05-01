import React from "react";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import PromotionCard from "@/components/ui/promotion/PromotionCard";

const Collection = () => {
  const router = useRouter()
  const handleButtonClick = () => {
    router.push("/shop")
  }
  return (
    <Box>
      <Grid container className="">
        <Grid container item xs={12}>
          <Grid item xs={12} md={6} className="md:h-[700px]">
            <PromotionCard
              isPicture
              backgroundUrl="/assets/img/info-item-img1.jpg"
              classes="m-4 mt-2 md:m-0 md:h-full md:w-full"
            />
          </Grid>
          <Grid item xs={12} md={6} className="md:h-[700px] m-4 md:m-0">
            <PromotionCard
              isText
              styledTitle="Check This Out"
              bigTitle="New Collection For Delicate Skin"
              except="Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse."
              shortText="Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim."
              button
              classes="md:bg-[url('/assets/img/info-item-bg1.jpg')] bg-cover bg-center p-2 md:h-full md:p-6 md:pt-24 lg:pl-12 xl:pt-40 xl:pl-24"
              styledClasses="text-[2.5rem]"
              handleButtonClick={handleButtonClick}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={12} md={6} className="md:h-[700px]">
            <PromotionCard
              isAbout
              isText
              styledTitle="About Us"
              bigTitle="Who We Are"
              except="Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse."
              shortText="Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim."
              classes="m-4 bg-[url('/assets/img/info-item-bg2.jpg')] lg:bg-cover lg:bg-center p-2 py-6 md:m-0 md:h-full md:p-6 lg:pl-32 md:pt-28 xl:pl-40"
              styledClasses="text-[2.5rem]"
            />
          </Grid>
          <Grid
            item
            className="w-full h-full md:w-[80%] m-4 md:m-0"
            xs={12}
            md={6}
          >
            <PromotionCard
              isVideo
              videoUrl="https://www.youtube.com/embed/K1yp7Q1hH1c"
              classes="relative w-full h-full"
            />
          </Grid>
        </Grid>
      </Grid>
        <Box className="pb-[40rem] xxs:pb-[50rem] xs:pb-[38rem] xss:pb-[34rem] sm:pb-[48rem] md:pb-[48rem] ml:pb-[8rem] lg:pb-[6rem] block" />
    </Box>
  );
};

export default Collection;

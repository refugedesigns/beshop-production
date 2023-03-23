import React, {Fragment} from "react";
import { Box, Typography} from "@mui/material";
import Banner from "@/components/ui/banner/Banner";
import Services from "@/components/ui/services/Services"

import aboutBlockInfo from "@/data/aboutBlockInfo/aboutBlockInfo"
import PromoSection from "@/components/about/PromoSection";
import StatsSection from "@/components/ui/statistics/StatsSection";
import WideCard from "@/components/ui/wide-card/WideCard";
import Advantages from "@/components/ui/advantages/Advantages";
import TestimonialSection from "@/components/ui/testimonails/TestimonialSection";
import SubscribeCard from "@/components/ui/subscribe/SubscribeCard";
import InstaPhotos from "@/components/ui/insta-photos/InstaPhotos";

const AboutPage = () => {
  return (
    <Fragment>
      <Banner
        pageTitle="About"
        breadcrumbs={[{ title: "Home", link: "/" }, { title: "About" }]}
      />
      <Box className="mt-10 space-y-4 mx-4 md:flex md:space-y-0 md:space-x-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:mx-auto md:mt-0 ">
        {aboutBlockInfo?.map((info, index) => (
          <Services
            key={index}
            title={info.step}
            excerpt={info.title}
            imageIcon={info.icon}
          />
        ))}
      </Box>
      <PromoSection />
      <StatsSection />
      <WideCard
        backgroundUrl={"bg-[url('/assets/img/discount-bg2.jpg')]"}
        styledHeading="Success Story"
        titleHeading={
          <Typography
            variant="h3"
            className="font-elegant max-w-[16rem] text-right text-2xl mt-4 md:text-left md:text-4xl lg:text-5xl md:max-w-full"
          >
            GoShop Develops It&apos;s Own Brands
          </Typography>
        }
        except="The GoShop network is being developed and improved, taking into account all consumers."
        text="Forming the range of stores, we, above all, strive not only to meet the format of 'home shop', offering each customer the most basic household goods, but also to create a unique space of beauty and care. BeShope stores offer their customers the widest and highest quality selection of products from world-renowned manufacturers."
        buttonText="Shop Now"
        extraClasses="md:h-[800px]"
      />
      <Advantages />
      <TestimonialSection />
      <SubscribeCard />
      <InstaPhotos />
    </Fragment>
  );
};

export default AboutPage;

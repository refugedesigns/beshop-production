import React from "react";
import { Box} from "@mui/material";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/ui/banner/Banner";
import Services from "@/components/ui/services/Services"

import aboutBlockInfo from "@/data/aboutBlockInfo/aboutBlockInfo"

const AboutPage = () => {
  return (
    <Layout>
      <Banner
        pageTitle="About"
        breadcrumbs={[{ title: "Home", link: "/" }, { title: "About" }]}
      />
      <Box className="mt-10 space-y-4 mx-8 md:flex md:space-y-0 md:space-x-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:mx-auto md:mt-0 ">
        {aboutBlockInfo?.map((info, index) => (
          <Services
            key={index}
            title={info.step}
            excerpt={info.title}
            imageIcon={info.icon}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default AboutPage;

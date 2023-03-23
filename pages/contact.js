import React, { Fragment } from "react";
import { Box, Container } from "@mui/material";
import Banner from "@/components/ui/banner/Banner";
import Services from "@/components/ui/services/Services";
import contactBlockInfo from "@/data/contactBlockInfo/contactBlockInfo";
import InfoSection from "@/components/contact/InfoSection";
import PartnerLogos from "@/components/ui/partner-logos/PartnerLogos";

const ContactPage = () => {
  return (
    <Fragment>
      <Banner
        pageTitle="Contact"
        breadcrumbs={[{ title: "Home", link: "/" }, { title: "Contact" }]}
      />
      <Box className="mt-10 w-[70%] flex items-center justify-center space-y-4 mx-8 md:flex md:space-y-0 md:space-x-4 lg:space-x-10  md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:mx-auto md:mt-0 ">
        {contactBlockInfo?.map((info, index) => (
          <Services
            key={index}
            excerpt={info.title}
            imageIcon={info.icon}
          />
        ))}
      </Box>
      <InfoSection />
      <PartnerLogos />
    </Fragment>
  );
};

export default ContactPage;

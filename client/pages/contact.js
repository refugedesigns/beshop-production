import React, { Fragment } from "react";
import { Box, Container, Typography } from "@mui/material";
import Banner from "@/components/ui/banner/Banner";
import Services from "@/components/ui/services/Services";
import contactBlockInfo from "@/data/contactBlockInfo/contactBlockInfo";
import InfoSection from "@/components/contact/InfoSection";
import PartnerLogos from "@/components/ui/partner-logos/PartnerLogos";
import WideCard from "@/components/ui/wide-card/WideCard";
import ContactForm from "@/components/contact/ContactForm";
import Location from "@/components/contact/Location";
import InstaPhotos from "@/components/ui/insta-photos/InstaPhotos";
import NextHead from "@/components/ui/Head/Head";

const ContactPage = () => {
  return (
    <Fragment>
      <NextHead title="GoShop - Contact" description="GoShop Contact Page" />
      <Banner
        pageTitle="Contact"
        breadcrumbs={[{ title: "Home", link: "/" }, { title: "Contact" }]}
      />
      <Box className="mt-10 space-y-4 mx-4 md:flex md:space-y-0 md:space-x-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:mx-auto md:mt-0 ">
        {contactBlockInfo?.map((info, index) => (
          <Services key={index} excerpt={info.title} imageIcon={info.icon} />
        ))}
      </Box>
      <InfoSection />
      <PartnerLogos />
      <WideCard
        backgroundUrl={"bg-[url('/assets/img/discount-bg3.jpg')]"}
        extraClasses="mt-10"
        styledHeading="Write To Us"
        titleHeading={
          <Typography
            variant="h3"
            className="font-elegant max-w-[16rem] text-right text-2xl mt-4 md:text-left md:text-4xl lg:text-7xl md:max-w-full"
          >
            Leave A Message
          </Typography>
        }
        except="Write to us if you have any questions, we will definitely contact you and find a solution."
        form={<ContactForm />}
      />
      <Location />
      <InstaPhotos />
    </Fragment>
  );
};

export default ContactPage;

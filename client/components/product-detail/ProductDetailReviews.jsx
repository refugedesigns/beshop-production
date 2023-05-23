import React, { useState } from 'react'
import { Box, Button, Divider, Tabs, Typography } from "@mui/material";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import moment from 'moment';

import CustomTab from "../ui/tabs/CustomTab";
import ReviewsTabPannel from "../ui/tabs/CustomTabPannel";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductDetailReviews = ({ description, reviews, productId }) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", px: 2 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          sx: {
            bgcolor: "transparent",
          },
        }}
        orientation={matches ? "horizontal" : "vertical"}
        className=""
      >
        <CustomTab label="Description" {...a11yProps(0)} />
        <CustomTab
          label="Reviews"
          className="lg:mx-2 mt-2 md:mt-0"
          {...a11yProps(1)}
        />
      </Tabs>
      <ReviewsTabPannel className="my-16" value={value} index={0}>
        <Typography>{description}</Typography>
      </ReviewsTabPannel>
      <ReviewsTabPannel className="my-16" value={value} index={1}>
        <Box className="lg:flex">
          <Box className="space-y-5 lg:w-2/3">
            {reviews?.map((review, index) => (
              <ReviewCard
                key={index}
                profileImage={review.user?.profileImage}
                username={review.user?.firstName}
                date={moment(review.createdAt).format("LL")}
                rating={review.rating}
                text={review.comment}
              />
            ))}
            <Button endIcon={<HiOutlineArrowLongRight />}>Show More</Button>
          </Box>
          <ReviewForm productId={productId} />
        </Box>
      </ReviewsTabPannel>
      <Divider />
    </Box>
  );
};

export default ProductDetailReviews
import React, { useState } from 'react'
import { Box, Tabs } from '@mui/material';
import CustomTab from '../ui/tabs/CustomTab';
import ReviewsTabPannel from "../ui/tabs/CustomTabPannel"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductDetailReviews = () => {
  const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          sx: {
            bgcolor: "transparent",
          },
        }}
        orientation="horizontal"
        className=""
      >
        <CustomTab label="Description" {...a11yProps(0)} />
        <CustomTab label="Reviews" className="mx-2" {...a11yProps(1)} />
      </Tabs>
      <ReviewsTabPannel value={value} index={0}>
        Item One
      </ReviewsTabPannel>
      <ReviewsTabPannel className="mt-10" value={value} index={1}>
        Item Two
      </ReviewsTabPannel>
    </Box>
  );
}

export default ProductDetailReviews
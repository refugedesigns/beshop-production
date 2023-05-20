import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProfileTabPanel from "../ui/tabs/CustomTabPannel";
import CustomTab from "../ui/tabs/CustomTab";
import dynamic from "next/dynamic";
const AllOrders = dynamic(() => import('./AllOrders'))
const AllWishlistItems = dynamic(() => import('../wishlist/AllWishlistItems'))


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProfileTabs = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (router.query.tab && router.query.tab === "orders") {
      setValue(1);
    }
  }, [router.query]);

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
        orientation={matches ? "horizontal" : "vertical"}
        className=""
      >
        <CustomTab label="My Info" {...a11yProps(0)} />
        <CustomTab label="My Orders" className="md:mx-2" {...a11yProps(1)} />
        <CustomTab label="Wishlist" {...a11yProps(2)} />
      </Tabs>
      <ProfileTabPanel value={value} index={0}>
        Item One
      </ProfileTabPanel>
      <ProfileTabPanel className="mt-10" value={value} index={1}>
        <AllOrders />
      </ProfileTabPanel>
      <ProfileTabPanel value={value} index={2}>
        <AllWishlistItems />
      </ProfileTabPanel>
    </Box>
  );
};

export default ProfileTabs;

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProfileTabPanel from "../ui/tabs/CustomTabPannel";
import CustomTab from "../ui/tabs/CustomTab";
import AllOrders from "./AllOrders";
import AllWishlistItems from "../wishlist/AllWishlistItems";

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
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

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
        textColor="white"
        orientation={matches ? "horizontal" : "vertical"}
        className=""
      >
        <CustomTab label="My Info" {...a11yProps(0)} />
        <CustomTab Tab label="My Orders" className="mx-2" {...a11yProps(1)} />
        <CustomTab Tab label="Wishlist" {...a11yProps(2)} />
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

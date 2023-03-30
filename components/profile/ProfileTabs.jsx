import React, { useState} from 'react'
import { Box, Tab, Tabs } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProfileTabPanel from './ProfileTabPanel';
import AllOrders from './AllOrders';
import AllWishlistItems from '../wishlist/AllWishlistItems';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


const ProfileTabs = () => {
   const [value, setValue] = useState(0);
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.up('sm'))

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
         textColor="white"
         orientation={matches ? "horizontal" : "vertical"}
         className=""
       >
         <Tab
           sx={{
             backgroundColor: "#faf9ff",
             border: "1px solid #eee",
             textTransform: "capitalize",
             fontSize: "1rem",
             color: "#808080",
             whiteSpace: "nowrap",
             "&.Mui-selected": {
               backgroundColor: "#d05278",
               color: "white",
               textTransform: "capitalize",
               fontSize: "1rem",
               border: "none",
             },
             px: 5,
             minWidth: {
               xs: "100%",
               sm: "auto",
             },
           }}
           label="My Info"
           {...a11yProps(0)}
         />
         <Tab
           Tab
           sx={{
             backgroundColor: "#faf9ff",
             border: "1px solid #eee",
             textTransform: "capitalize",
             fontSize: "1rem",
             color: "#808080",
             whiteSpace: "nowrap",
             "&.Mui-selected": {
               backgroundColor: "#d05278",
               color: "white",
               textTransform: "capitalize",
               fontSize: "1rem",
               border: "none",
             },
             px: 5,
             mx: {
               sm: 2,
             },
             my: {
               xs: 1,
               sm: 0,
             },
             minWidth: {
               xs: "100%",
               sm: "auto",
             },
           }}
           label="My Orders"
           {...a11yProps(1)}
         />
         <Tab
           Tab
           sx={{
             backgroundColor: "#faf9ff",
             border: "1px solid #eee",
             textTransform: "capitalize",
             fontSize: "1rem",
             color: "#808080",
             whiteSpace: "nowrap",
             "&.Mui-selected": {
               backgroundColor: "#d05278",
               color: "white",
               textTransform: "capitalize",
               fontSize: "1rem",
               border: "none",
             },
             px: 5,
             minWidth: {
               xs: "100%",
               sm: "auto",
             },
           }}
           label="Wishlist"
           {...a11yProps(2)}
         />
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
}

export default ProfileTabs
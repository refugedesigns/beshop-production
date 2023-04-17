import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  Tab,
  Tabs,
  Container,
  getBackdropUtilityClass,
} from "@mui/material";
import TrendingTabPanel from "../../ui/tabs/CustomTabPannel";
import CustomTab from "../../ui/tabs/CustomTab";
const ProductList = dynamic(() => import("./ProductList"));

import { getProductByCategory } from "@/lib/getProductByCategory";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TrendingTabs = ({ products }) => {
  const [value, setValue] = useState(0);
  const [currentProducts, setCurrentProducts] = useState(products);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      if (value === 1) {
        setLoading(true);
        const spaProducts = await getProductByCategory("spa");
        setCurrentProducts(spaProducts);
        setLoading(false);
      } else if (value === 2) {
        setLoading(true);
        const perfumeProducts = await getProductByCategory("perfume");
        setCurrentProducts(perfumeProducts);
        setLoading(false);
      } else if (value === 3) {
        setLoading(true);
        const nailsProducts = await getProductByCategory("nail");
        setCurrentProducts(nailsProducts);
        setLoading(false);
      } else if (value === 4) {
        setLoading(true);
        const skinProducts = await getProductByCategory("skin");
        setCurrentProducts(skinProducts);
        setLoading(false);
      } else if (value === 5) {
        setLoading(true);
        const hairProducts = await getProductByCategory("hair");
        setCurrentProducts(hairProducts);
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [value]);

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
        className="w-full sm:px-4 md:px-0 mb-10"
        centered={matches ? true : false}
      >
        <CustomTab label="Make UP" className="" {...a11yProps(0)} />
        <CustomTab label="SPA" className="md:mx-4" {...a11yProps(1)} />
        <CustomTab label="Perfume" {...a11yProps(2)} />
        <CustomTab label="Nails" className="md:mx-4" {...a11yProps(3)} />
        <CustomTab label="Skin care" {...a11yProps(4)} />
        <CustomTab label="Hair care" className="md:ml-4" {...a11yProps(5)} />
      </Tabs>
      <TrendingTabPanel value={value} index={0}>
        <ProductList products={currentProducts} />
      </TrendingTabPanel>
      <TrendingTabPanel className="" value={value} index={1}>
        <ProductList products={currentProducts} loading={loading} />
      </TrendingTabPanel>
      <TrendingTabPanel value={value} index={2}>
          <ProductList products={currentProducts} loading={loading} />
      </TrendingTabPanel>
      <TrendingTabPanel value={value} index={3}>
          <ProductList products={currentProducts} loading={loading} />
      </TrendingTabPanel>
      <TrendingTabPanel value={value} index={4}>
          <ProductList products={currentProducts} loading={loading} />
      </TrendingTabPanel>
      <TrendingTabPanel value={value} index={5}>
          <ProductList products={currentProducts} loading={loading} />
      </TrendingTabPanel>
    </Box>
  );
};

export default TrendingTabs;

import React, { useState, useEffect, useMemo } from "react";
import { Box, Divider, Typography } from "@mui/material";
import CatListItem from "./CatListItem";

const catList = [
  { title: "Make Up", number: 37 },
  { title: "SPA", number: 142 },
  { title: "Perfume", number: 153 },
  { title: "Nails", number: 86 },
  { title: "Skin care", number: 48 },
  { title: "Hair care", number: 54 },
];

const CatListView = ({ queryFilter, setQueryFilter }) => {
  const [filterItems, setFilterItems] = useState([]);
  const filters = useMemo(() => filterItems, [filterItems])

  useEffect(() => {
    if(filters.length === 0) {
      if(queryFilter.filterItems) {
        const newFilter = {...queryFilter}
        delete newFilter.filterItems
        setQueryFilter(newFilter)
      }
    }else {
      const newFilter = {...queryFilter}
      newFilter.filterItems = filters.join(",")
      setQueryFilter(newFilter)
    }
  }, [filters])


  const handleCartListItemClick = (title) => {

    if (title === "Make Up") {
      title = title.replace(" ", "").toLowerCase();
    } else if (title === "Nails") {
      title = title.split(" ")[0].toLowerCase().replace("s", "");
    } else {
      title = title.split(" ")[0].toLowerCase();
    }

    setFilterItems((prevItems) => {
      const existingItemIndex = prevItems?.findIndex((item) => item === title);
      const existingItem = prevItems[existingItemIndex];
      if (existingItem) {
        console.log(existingItem)
        prevItems = prevItems.filter(item => item !== title);
        return prevItems
      }
      prevItems = [...prevItems, title]
      return prevItems
    });

    
  };
  return (
    <Box>
      <Typography variant="h5" component="h2" className="font-elegant">
        Categories
      </Typography>
      <Divider className="mt-2 bg-black h-[0.1rem]" />
      <Box className="mt-4 space-y-4 w-full">
        {catList.map((catItem, index) => (
          <CatListItem
            key={index}
            title={catItem.title}
            number={catItem.number}
            onClick={() => handleCartListItemClick(catItem.title)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CatListView;

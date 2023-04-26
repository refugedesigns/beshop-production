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
    console.log(filters)
    if(filters.length === 0 && queryFilter.includes("&filterItems")) {
      const removeFilter = queryFilter
        .split("&")
        .filter((item) => !item.includes("filterItems"))
        .join("&");
          queryFilter = removeFilter
          setQueryFilter(queryFilter)
    } else if(queryFilter?.includes("&filterItems=") && filters.length > 1) {
        const editFilter = queryFilter.split("&")
        const remainingFilters = editFilter.filter(item => !item.includes('filterItems'))
        const newFilter = `filterItems=${filters.join(",")}`
        queryFilter = [...remainingFilters, newFilter].join("&")
        console.log(queryFilter);
        setQueryFilter(queryFilter);
      }else if(filters.length > 1) {
        queryFilter = queryFilter + `&filterItems=${filters.join(",")}`
        console.log(queryFilter);
        setQueryFilter(queryFilter);
      }else if( filters.length === 1 && queryFilter.includes("&filterItems")) {
        console.log(queryFilter)
        const editFilter = queryFilter.split("&");
        const remainingFilters = editFilter.filter(
          (item) => !item.includes("filterItems")
        );
        const newFilter = `filterItems=${filters[0]}`;
        queryFilter = [...remainingFilters, newFilter].join("&")
        console.log(queryFilter);
        setQueryFilter(queryFilter);
      }else if(filters.length === 1 && !queryFilter.includes("&filterItems")){
        queryFilter = queryFilter + `&filterItems=${filters[0]}`
        setQueryFilter(queryFilter)
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

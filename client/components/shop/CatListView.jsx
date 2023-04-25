import React from 'react'
import { Box, Divider, Typography } from "@mui/material"
import CatListItem from './CatListItem';

const catList = [
  { title: "Make Up", number: 37 },
  { title: "SPA", number: 142 },
  { title: "Perfume", number: 153 },
  { title: "Nails", number: 86 },
  { title: "Skin care", number: 48 },
  { title: "Hair care", number: 54 },
];

const CatListView = ({ setQueryFilter }) => {
  const handleCartListItemClick = (title) => {
    console.log(title);
    let filterItems = [];
    if (title === "Make Up") {
      title = title.replace(" ", "").toLowerCase();
      console.log(title);
    } else if (title === "Nails") {
      title = title.split(" ")[0].toLowerCase().replace("s", "");
      console.log(title);
    } else {
      title = title.split(" ")[0].toLowerCase();
      console.log(title);
    }

    
    console.log(title)
    console.log(filterItems)
    const existingCategory = filterItems.find(item => item === title)
    console.log(existingCategory);

    if (existingCategory) {
      filterItems = filterItems.filter((item) => item !== existingCategory);
      console.log(filterItems)
    } else {
      filterItems.push(title);
    }
    console.log(filterItems);
    setQueryFilter((prevFilter) => {
      if(filterItems.length === 0) {
        return
      }
      if(prevFilter.includes("&filterItems=")) {
        console.log(prevFilter);
        console.log(prevFilter.split("&").filter(item => item.includes("&filterItems=")))
        prevFilter = prevFilter.split("&").filter(item => !item.includes("&filterItems=")).join("&")
        // prevFilter = prevFilter.replace("&filterItems=")
        console.log(prevFilter)
      }
      prevFilter = prevFilter + `&filterItems=${filterItems.join("")}`;
      return prevFilter;
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

export default CatListView
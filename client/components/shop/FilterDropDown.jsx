import { FormControl, Select, MenuItem } from '@mui/material'
import React from 'react'

const FilterDropDown = ({ setQueryFilter }) => {
  const [value, setValue] = React.useState("cheap_to_expensive");
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
    if(event.target.value === "cheap_to_expensive" && value !== "cheap_to_expensive") {
      setQueryFilter(prevFilter => {
        if(prevFilter.includes("&sort=price")) {
          return prevFilter
        }else if(prevFilter.includes("&sort=-price")) {
          prevFilter = prevFilter.replace("&sort=-price", "&sort=price");
        }else {
          prevFilter = prevFilter + "&sort=price";
        }
        return prevFilter
      })
    }else if(event.target.value === "expensive_to_cheap" && value !== "expensive_to_cheap") {
      setQueryFilter(prevFilter => {
        if(prevFilter.includes("&sort=price")) {
          prevFilter = prevFilter.replace("&sort=price","&sort=-price")
        }else {
          prevFilter = prevFilter + "&sort=-price"
        }
        return prevFilter
      })
    }
    
  };
  return (
    <FormControl className="w-full lg:w-min">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
        size="small"
      >
        <MenuItem value="expensive_to_cheap">From expensive to cheap</MenuItem>
        <MenuItem value="cheap_to_expensive">From cheap to expensive</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterDropDown
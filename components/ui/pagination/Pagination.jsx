import React from "react";

import { Stack, Button, IconButton, Box } from "@mui/material";
import usePagination from "@mui/material/usePagination";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Pagination = () => {
  const { items } = usePagination({
    count: 10,
  });
  return (
    <Stack direction="row" spacing={1} className="items-center">
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;

        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = "...";
        } else if (type === "previous") {
          children = (
            <IconButton
              className="border-solid border-[1px] border-gray-300 bg-gray-100 rounded-none h-14 w-10 cursor-pointer"
              {...item}
            >
              <MdArrowBackIos />
            </IconButton>
          );
        }else if(type === 'next') {
          children = (
            <IconButton
              className="border-solid border-[1px] border-gray-300 bg-gray-100 rounded-none h-14 w-10 cursor-pointer"
              {...item}
            >
              <MdArrowForwardIos />
            </IconButton>
          );
        }else if(type === 'page') {
          children = <Box className={`h-14 w-10 flex justify-center items-center border-solid border-[1px] border-gray-300 hover:bg-black hover:text-white hover:cursor-pointer ${selected ? 'bg-black text-white' : 'bg-gray-100'}`} type="button" {...item}>{page}</Box>
        }else {
          children = <Button type="button" {...item}>{type}</Button>
        }

        return <Box key={index}>{children}</Box>
      })}
    </Stack>
  );
};

export default Pagination;

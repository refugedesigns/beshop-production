import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Stack, Button, IconButton, Box, Pagination, PaginationItem } from "@mui/material";
import usePagination from "@mui/material/usePagination";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { selectNumOfPages } from "@/store/productsSlice";

let page = 1
let PaginationComp = ({ queryFilter, setQueryFilter }) => {

  const handlePageChange = useCallback((event, value) => { 
    const newFilter = { ...queryFilter, page: value };
    setQueryFilter(newFilter);
    page = value
  }, [queryFilter, setQueryFilter, page])

  useEffect(() => {
    console.log(page)
  }, [page])

  const numOfPages = useSelector(selectNumOfPages);
  const { items } = usePagination({
    count: numOfPages,
    onChange: handlePageChange,
    page: queryFilter.page
  });

  return (
    <Stack direction="row" spacing={1} className="items-center mt-14">
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;

        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = "...";
        } else if (type === "previous") {
          children = (
            <IconButton
              className="border-solid border-[1px] border-gray-300 bg-gray-100 rounded-none h-14 w-10 cursor-pointer"
              {...item}
              type="button"
            >
              <IoIosArrowBack />
            </IconButton>
          );
        } else if (type === "next") {
          children = (
            <IconButton
              className="border-solid border-[1px] border-gray-300 bg-gray-100 rounded-none h-14 w-10 cursor-pointer"
              {...item}
              type="button"
            >
              <IoIosArrowForward />
            </IconButton>
          );
        } else if (type === "page") {
          children = (
            <Box
              className={`h-14 w-10 flex justify-center items-center border-solid border-[1px] border-gray-300 hover:bg-black hover:text-white hover:cursor-pointer ${selected ? "bg-black text-white": "bg-gray-100"}`}
              type="button"
              {...item}
            >
              {page}
            </Box>
          );
        } else {
          children = (
            <Button type="button" {...item}>
              {type}
            </Button>
          );
        }

        return <Box key={index}>{children}</Box>;
      })}
    </Stack>
  );
};

PaginationComp = React.memo(PaginationComp)

export default PaginationComp;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addDiscount, selectDiscount } from "@/store/cartSlice";

import {Typography} from "@mui/material";
import WideCard from "@/components/ui/wide-card/WideCard";

export const Discount = () => {
  const currentDiscount = useSelector(selectDiscount)
  const dispatch = useDispatch()

  const handleAddDiscount = () => {
    if(currentDiscount > 0) {
      toast.error("Discount already added!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return
    }
    dispatch(addDiscount({discount: 50}))
    toast.success("50% discount added to all purchases!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  return (
    <WideCard
      backgroundUrl={"bg-[url('/assets/img/discount-bg.jpg')]"}
      styledHeading="Discount"
      titleHeading={
        <Typography
          variant="h3"
          className="font-elegant max-w-[16rem] text-right mt-4 md:text-left md:text-6xl lg:text-8xl md:max-w-full"
        >
          Get Your <span className="text-style-color">50% </span>off
        </Typography>
      }
      handleButtonClick={handleAddDiscount}
      buttonText="Get Now!"
      except=" Nourish your skin with toxin-free cosmetic products. With the offers
            that you can&lsquo;t refuse."
    />
  );
};

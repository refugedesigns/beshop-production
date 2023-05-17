import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { Box, Divider, Typography } from "@mui/material";
import Button from "../ui/button/Button";
import { ProgressBar } from "react-loader-spinner";
import {
  selectCartItems,
  selectDiscount,
  selectShippingFees,
  selectSubtotal,
  selectTotalPrice,
  useCreateOrderMutation,
} from "@/store/cartSlice";
import { selectCurrentUser } from "@/store/userSlice";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const TotalAmount = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const discountAmount = useSelector(selectDiscount);
  const shippingFees = useSelector(selectShippingFees);
  const subtotalAmount = useSelector(selectSubtotal);
  const totalAmount = useSelector(selectTotalPrice);
  const items = useSelector(selectCartItems);
  const user = useSelector(selectCurrentUser);
  const [createOrder, { isLoading, isError, error, isSuccess, data }] =
    useCreateOrderMutation();

  const handleLoginNav = () => {
    router.push("/login?redirect=cart");
  };

  useEffect(() => {
    const redirectToCheckout = async () => {
      try {
        const stripe = await stripePromise;
        console.log(data);

        await stripe.redirectToCheckout({
          sessionId: data.id,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (isSuccess) {
      redirectToCheckout();
    }

    if (isError) {
      setLoading(false);
    }
  }, [isSuccess, isError]);

  const handleCheckoutSession = () => {
    setLoading(true);
    const order = {
      items,
      shippingFees,
      discount: discountAmount,
    };
    createOrder(order);
  };

  return (
    <Box className="bg-custom-gray p-4 md:p-10 lg:p-16 lg:flex-1">
      <Box className=" bg-green-200 text-green-500 w-[80%] p-6 rounded-xl">
        <Typography className="mb-4">CHECKOUT INFO</Typography>
        <Typography className="">
          Test Card: 4242 4242 4242 4242
        </Typography>
        <Typography className="">Data: Any Future Date</Typography>
        <Typography>CVC: Any 3 digit</Typography>
      </Box>
      <Box className="flex items-center justify-between pb-4 mt-4">
        <Typography variant="bod2">Discount on promo code</Typography>
        <Typography variant="body2">{discountAmount}%</Typography>
      </Box>
      <Divider className="bg-black" />
      <Box className="flex items-center justify-between py-4">
        <Typography variant="bod2">Subtotal</Typography>
        <Typography variant="body2">{subtotalAmount}</Typography>
      </Box>
      <Divider className="bg-black" />
      <Box className="flex items-center justify-between py-4">
        <Typography variant="bod2">Shipping Fees</Typography>
        <Typography variant="body2">{subtotalAmount > 0 ? shippingFees : 0}</Typography>
      </Box>
      <Divider className="bg-black" />
      <Box className="flex justify-between items-center mb-16 mt-6 whit">
        <Typography variant="h5">Total</Typography>
        <Typography variant="h5">$ {totalAmount}</Typography>
      </Box>
      {!user._id ? (
        <Button
          onClick={handleLoginNav}
          title="Please login to checkout"
          classes="w-full whitespace-nowrap"
        />
      ) : (
        <Button
          disabled={items.length < 1}
          onClick={handleCheckoutSession}
          title="Checkout"
          classes="w-full disabled:text-white disabled:opacity-70"
        />
      )}
      {loading && (
        <Box className="flex justify-center">
          <ProgressBar
            height="80"
            width="120"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#d05278"
          />
        </Box>
      )}
    </Box>
  );
};

export default TotalAmount;

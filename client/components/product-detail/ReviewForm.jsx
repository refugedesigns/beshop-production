import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Rating, CardMedia, TextField } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import InputField from "../ui/inpu-field/InputField";
import Button from "../ui/button/Button";
import Image from "next/image";

import { Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useCreateProductReviewMutation } from "@/store/productsSlice";
import { selectCurrentUser } from "@/store/userSlice";

const validationSchema = yup.object({
  title: yup.string().required("Title field cannot be empty"),
  message: yup.string().required("Message field cannot be empty"),
});

const ReviewForm = ({productId}) => {
  const [rating, setRating] = useState(2);
  const user = useSelector(selectCurrentUser)
  const [createReview, {isLoading}] = useCreateProductReviewMutation()
  const initialValues = {
    title: "",
    message: "",
  };
  return (
    <Box className="bg-[#FCECEB] px-4 py-10 relative sm:mx-4 sm:px-8 lg:w-1/3 h-min">
      <CardMedia className="w-[50%] absolute -bottom-4 right-0 sm:w-[50%] lg:-bottom-2">
        <Image
          src="/assets/img/comment-form-decor.png"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt=""
        />
      </CardMedia>
      <CardMedia className="w-[50%] absolute -bottom-4 right-0 sm:w-[50%] lg:-bottom-2">
        <Image
          src="/assets/img/subscribe-img.png"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt=""
        />
      </CardMedia>
      <Box className="space-y-5">
        <Typography variant="h4" className="font-elegant">
          Leave A Review
        </Typography>
        <Typography variant="body1">
          Your email address will not be published.
        </Typography>
      </Box>
      <Box className="mt-10">
        <Rating
          icon={<AiFillStar className="text-white" />}
          name="controlled-rating"
          value={rating}
          onChange={(event, newValue ) => {
            setRating(newValue);
          }}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            if (!user._id) {
              toast.error("Please login first to post a review", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              return;
            }
            const review = {
              title: values.title,
              comment: values.message,
              rating,
              user: user._id,
              product: productId,
            };
            console.log(review);
            try {
              const payload = await createReview(review).unwrap();
              console.log(payload);
              setSubmitting(false);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors,
            isSubmitting,
          }) => (
            <Box
              onSubmit={handleSubmit}
              className="space-y-4 mt-4"
              component="form"
            >
              <InputField
                placeholder="Enter your title"
                name="title"
                id="title"
                type="text"
                helperText={touched.title ? errors.title : ""}
                error={touched.title && Boolean(errors.title)}
                value={values.title}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                placeholder="Enter your review"
                multiline
                minRows={5}
                name="message"
                id="message"
                fullWidth
                helperText={touched.message ? errors.message : ""}
                error={touched.message && Boolean(errors.message)}
                value={values.message}
                onChange={handleChange}
                sx={{
                  bgcolor: "white",
                  "& fieldset": {
                    border: "1px solid #FCECEB",
                    borderRadius: 0,
                  },
                }}
                inputProps={{
                  sx: {
                    backgroundColor: "white",
                  },
                }}
              />
              <Button
                disabled={isSubmitting}
                type="submit"
                title="Send"
                classes="w-[140px] disabled:text-white disabled:opacity-70"
              />
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default ReviewForm;

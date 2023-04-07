import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardMedia,
  Container,
  Divider,
} from "@mui/material";
import { MdOutlineExpandMore } from "react-icons/md";


const SingleQuestion = ({ questionNumber, questionTitle, questionBody, expanded, handleChange }) => {

  return (
    <Stack direction="row" className={`space-x-4 ${expanded ? "items-start" : "items-center"}`}>
      <Box className={`bg-[url('/assets/img/main-text-decor.png')] bg-contain bg-no-repeat bg-center flex items-center justify-center w-10 h-10 ${expanded ? 'mt-12': 'mt-0'}`}>
        <Typography variant="body1" className="font-lato">
          {questionNumber}
        </Typography>
      </Box>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        className="flex-1 rounded-none shadow-none py-4"
        
      >
        <AccordionSummary
          expandIcon={<MdOutlineExpandMore className="w-6 h-6" />}
          aria-controls={`panel${questionNumber}bh-content`}
          id={`panel${questionNumber}bh-header`}
          className={`${expanded ? 'border-b border-t border-gray-300 border-solid': ''}`}
        >
          <Typography variant="h5" className={`font-elegant text-base md:text-xl ${expanded ? 'text-style-color': undefined}`}>{questionTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails className="mt-6">
          <Typography variant="body1" className="text-sm font-elegant text-gray-500 md:text-base">{questionBody}</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default SingleQuestion;

import React, { useState } from 'react'
import { Box, Container, Button } from '@mui/material'
import { HiArrowLongRight } from 'react-icons/hi2'
import faqQuestions from '@/data/faq/faq'
import SearchFAQ from './SearchFAQ'
import SingleQuestion from './SingleQuestion'

const AllQuestions = () => {
      const [expanded, setExpanded] = useState(false);

      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        // setExpanded(prev => prev ? panel : false);
      };
  return (
    <Container className="mt-20 md:mt-40">
      <SearchFAQ />
      {faqQuestions.map((question, index) => (
        <SingleQuestion
          key={question.id}
          questionNumber={question.id}
          questionTitle={question.title}
          questionBody={question.content}
          expanded={expanded === `panel${question.id}`}
          handleChange={handleChange(`panel${question.id}`)}
        />
      ))}
      <Button variant="text" className='text-style-color' endIcon={<HiArrowLongRight />}>
        Show More
      </Button>
    </Container>
  );
}

export default AllQuestions
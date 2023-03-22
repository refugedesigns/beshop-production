import React from 'react'
import { Grid, Typography, Box } from '@mui/material';
import StyledTitle from '../styled-text/StyledTitle';
import Button from '../button/Button';

const WideCard = ({styledHeading, titleHeading, backgroundUrl, except, text, buttonText, extraClasses}) => {
  return (
    <Grid
      container
      className={`${backgroundUrl} ${extraClasses} bg-cover bg-no-repeat bg-center pb-10`}
    >
      <Grid item sm={6}></Grid>
      <Grid
        item
        xs={12}
        sm={6}
        className="pt-24 px-4 flex flex-col items-end md:items-start lg:max-w-lg"
      >
        <StyledTitle title={styledHeading} />
        <Box className="">
          {titleHeading}
        </Box>
        <Box className="">
          <Typography
            variant="h6"
            className="font-elegant text-[16px] mt-6 text-right md:text-2xl md:text-left md:max-w-md"
          >
            {except}
          </Typography>
          {text && <Typography variant='body1' className='mt-8 font-elegant text-sm lg:text-gray-500 text-right md:text-left'>{text}</Typography>}
        </Box>
        <Button title={buttonText} classes="mt-10" />
      </Grid>
      <Grid></Grid>
    </Grid>
  );
}

export default WideCard
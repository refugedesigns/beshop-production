import React from 'react'

import { Card, CardMedia, Typography, Box } from "@mui/material";

const BenefitCard = ({ cardImage, heading, except }) => {
  return (
    <Card className='shadow-none'>
      <Box>
        <CardMedia component="img" image={cardImage} className="h-20 object-contain" />
      </Box>
      <Typography variant="h5" component="h2">
        {heading}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {except}
      </Typography>
    </Card>
  );
};

export default BenefitCard
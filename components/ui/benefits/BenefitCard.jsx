import React from 'react'

import { Card, CardMedia, Typography } from '@mui/material'

const BenefitCard = ({cardImage, heading, except}) => {
  return (
    <Card>
        <CardMedia 
        component="img"
        height="150"
        image={cardImage}
        />
        <Typography variant="h5" component="h2">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {except}
        </Typography>
    </Card>
  )
}

export default BenefitCard
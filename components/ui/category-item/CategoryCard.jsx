import React from 'react'

import { CardMedia, Box, Typography } from '@mui/material'

const CategoryCard = ({imageUrl, title, icon, iconText}) => {
  return (
    <Box>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={imageUrl}
        />
        <Box>
            <Box>
                <Typography>{title}</Typography>
            </Box>
            <Typography>{iconText}</Typography>
            {icon}
            <Box />
        </Box>
    </Box>
  )
}

export default CategoryCard;
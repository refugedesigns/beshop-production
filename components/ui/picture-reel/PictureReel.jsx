import React from 'react'

import { CardMedia, Box } from '@mui/material'

const PictureReel = ({imageUrl}) => {
  return (
    <Box>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={imageUrl.split("/")[-1]}
        />
    </Box>
  )
}

export default PictureReel
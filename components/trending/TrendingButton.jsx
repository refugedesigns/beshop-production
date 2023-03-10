import React from 'react'

import { Button } from '@mui/material'

const TrendingButton = ({onClick, title}) => {
  return (
    <Button onClick={onClick} variant="contained" color="primary">
      {title}
    </Button>
  )
}

export default TrendingButton
import React from 'react'
import { Box, Typography } from '@mui/material'

const FooterRights = () => {
  return (
    <Box>
      <Typography variant="body2" color="text.secondary" align="center" className='text-gray-400'>
        © Copyright {new Date().getFullYear()} Made with ❤️ by Erasmus Antwi
      </Typography>
    </Box>
  );
}

export default FooterRights
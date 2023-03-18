import React from 'react'
import { Box, Divider, Typography } from "@mui/material"
import CatListItem from './CatListItem';

const CatListView = () => {
  return (
    <Box className="mt-6">
      <Typography variant="h5" component="h2" className="font-elegant">
        Categories
      </Typography>
      <Divider className='mt-2 bg-black h-[0.1rem]' />
      <Box className="mt-4 space-y-4">
        <CatListItem title="Make Up" number="37" />
        <CatListItem title="SPA" number="162" />
        <CatListItem title="Perfume" number="153" />
        <CatListItem title="Nails" number="86" />
        <CatListItem title="Skin care" number="48" />
        <CatListItem title="Hair care" number="54" />
      </Box>
    </Box>
  );
}

export default CatListView
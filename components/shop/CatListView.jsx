import React from 'react'
import { Box, Divider, Typography } from "@mui/material"
import CatListItem from './CatListItem';

const CatListView = () => {
  return (
    <Box>
      <Typography variant="h5" component="h2">
        Categories
      </Typography>
      <Divider />
      <CatListItem title="Make Up" number="37" />
      <CatListItem title="SPA" number="162" />
      <CatListItem title="Perfume" number="153" />
      <CatListItem title="Nails" number="86" />
      <CatListItem title="Skin care" number="48" />
      <CatListItem title="Hair care" number="54" />
    </Box>
  );
}

export default CatListView
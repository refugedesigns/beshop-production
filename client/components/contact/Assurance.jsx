import React from 'react'
import {Stack, Typography} from "@mui/material"

const Assurance = () => {
  return (
    <Stack>
      <Typography variant="h3" className='font-elegant text-2xl lg:text-4xl'>We Take Care Of You</Typography>
      <Typography variant="body" className='font-elegant mt-6 text-sm text-gray-500 lg:text-base lg:max-w-3xl'>
        Email us if you have any questions, we will be sure to contact you and
        find a solution. Also, our managers will help you choose the product
        that suits you best, at the best price. From year to year, the BeShop
        network develops and improves, taking into account all consumer needs
        and market trends. But for us, the concern remains that when coming to
        the BeShop store, customers do not have questions about the convenience
        and comfort of shopping, product quality and the level of
        professionalism of sales consultants.
      </Typography>
    </Stack>
  );
}

export default Assurance;
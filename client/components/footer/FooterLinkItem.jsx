import React from 'react'
import Link from 'next/link'

import { Stack, Typography } from '@mui/material'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const FooterLinkItem = ({title, link}) => {
  return (
    <Stack component={Link} href={link} direction="row" alignItems="center" spacing={1} className='text-gray-400 hover:text-white hover:cursor-pointer no-underline' >
      <MdOutlineKeyboardArrowRight />
      <Typography variant="subtitle1">{title}</Typography>
    </Stack>
  )
}

export default FooterLinkItem
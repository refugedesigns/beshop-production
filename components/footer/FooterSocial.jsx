import React from 'react'

import { Typography, Box, Stack } from '@mui/material'
import { CgFacebook } from "react-icons/cg"
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from'react-icons/fa'
import SocialIcon from './SocialIcon'

const FooterSocial = () => {
  return (
    <Box>
        <Typography variant='body2' className='text-stone-500 mb-2 text-center md:text-left'>Find us here:</Typography>
        <Stack direction="row" spacing={2}>
            <SocialIcon Icon={CgFacebook} />
            <SocialIcon Icon={BsTwitter} />
            <SocialIcon Icon={BsInstagram} />
            <SocialIcon Icon={FaLinkedinIn} />
        </Stack>
    </Box>
  )
}

export default FooterSocial;

import React from 'react'
import { Container } from '@mui/material'
import Assurance from './Assurance'
import ContactSocial from './ContactSocial'

const InfoSection = () => {
  return (
    <Container maxWidth="lg" className='mt-20 lg:mt-40 space-y-6 md:flex md:space-y-0 md:items-center md:justify-center md:space-x-28'>
      <Assurance/>
      <ContactSocial />
    </Container>
  )
}

export default InfoSection
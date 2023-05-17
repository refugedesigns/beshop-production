import React from 'react'
import { Portal } from '@mui/material'

const ModalPortal = ({ children }) => {
  return (
    <Portal>{children}</Portal>
  )
}

export default ModalPortal
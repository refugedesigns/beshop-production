import React from 'react'
import { TableRow } from '@mui/material'

const StyledTableRow = ({children, ...props}) => {
  return (
    <TableRow
    sx={{
        border: "none",
        '&:nth-of-type(even)': {
            backgroundColor: 'secondary.main'
        },
        '&:last-child td, &:last-child th': {
            height: '7rem',
            border: 'none'
        }
    }}
    {...props}
    >
        {children}
    </TableRow>
  )
}

export default StyledTableRow
import React from 'react'

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = ({children, ...props}) => {
  return (
    <TableCell
    sx={{
        [`&.${tableCellClasses.head}`]: {
            border: "none",
            py: 0
        },
        [`&.${tableCellClasses.body}`]: {
            border: "none"
        },
    }}
    {...props}
    >
        {children}
    </TableCell>
  )
}

export default StyledTableCell
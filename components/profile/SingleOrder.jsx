import React from 'react'

import { Stack, Box, Typography, Divider, Accordion, AccordionSummary, AccordionDetails, Table, TableHead} from '@mui/material'
import TableRow, {TableRowClasses} from '@mui/material/TableRow '
import TableCell, {tableCellClasses} from '@mui/material/TableCell'
import { HiOutlinePlusSmall } from 'react-icons/hi2'
const SingleOrder = () => {
  return (
    <Accordion>
        <AccordionSummary
        expandIcon={<HiOutlinePlusSmall />}
        aria-controls={`panel${orderNumber}bh-content`}
        id={`panel${orderNumber}bh-header`}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>

                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </AccordionSummary>
    </Accordion>
  )
}

export default SingleOrder
import React from 'react'

import {
  Stack,
  Box,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableHead,
  TableBody,
  IconButton,
  Hidden
} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { HiOutlinePlusSmall, HiOutlineMinusSmall } from "react-icons/hi2";
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";
const SingleOrder = ({
  orderDate,
  orderAddress,
  orderAmount,
  orderStatus,
  orderItems,
  index,
  expanded,
  onChange
}) => {
  console.log(orderItems);
  return (
    <Accordion
      className="shadow-none"
      expanded={expanded}
      sx={{
        "&:before": {
          border: "none",
          backgroundColor: "transparent",
        },
      }}
      onChange={onChange}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <IconButton className="bg-red-100 border-solid border border-[#eee] text-red-500">
              <HiOutlineMinusSmall />
            </IconButton>
          ) : (
            <IconButton className="bg-[#faf9ff] border-solid border border-[#eee]">
              <HiOutlinePlusSmall />
            </IconButton>
          )
        }
        aria-controls={`panel${index + 1}bh-content`}
        id={`panel${index + 1}bh-header`}
        className="py-6"
        sx={{
          "&.MuiAccordionSummary-root": {
            backgroundColor: expanded ? "secondary.main" : "white",
            border: "1px solid #eee",
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow className="flex flex-col md:flex-row md:items-center w-full space-y-4 md:space-y-0">
              <Hidden smUp>
                <Typography
                  variant="body1"
                  className="uppercase font-semibold text-sm pl-4"
                >
                  Date
                </Typography>
              </Hidden>
              <StyledTableCell className="md:w-[20%]">
                <Typography variant="body2">{orderDate}</Typography>
              </StyledTableCell>
              <Hidden smUp>
                <Typography
                  variant="body1"
                  className="uppercase font-semibold text-sm pl-4"
                >
                  Address
                </Typography>
              </Hidden>
              <StyledTableCell className="flex flex-1 md:justify-center md:border-solid md:border md:border-t-0 md:border-b-0 md:border-[#eee]">
                <Typography
                  variant="body2"
                  className="max-w-[15rem] text-left md:text-center"
                >
                  {orderAddress}
                </Typography>
              </StyledTableCell>
              <Hidden smUp>
                <Typography
                  variant="body1"
                  className="uppercase font-semibold text-sm pl-4"
                >
                  Amount
                </Typography>
              </Hidden>
              <StyledTableCell className="md:w-[20%] flex md:justify-center">
                <Typography variant="body2">{orderAmount}</Typography>
              </StyledTableCell>
              <Hidden smUp>
                <Typography
                  variant="body1"
                  className="uppercase font-semibold text-sm pl-4"
                >
                  Status
                </Typography>
              </Hidden>
              <StyledTableCell className="md:w-[20%] py-[.7rem] flex md:justify-center md:border-solid md:border md:border-t-0 md:border-b-0 md:border-r-0 md:border-[#eee]">
                {orderStatus.onWay ? (
                  <Typography variant="body2" className='text-red-500'>ON IT&#39;S WAY</Typography>
                ) : (
                  <Typography variant="body2" className='text-green-600'>DELIVERED</Typography>
                )}
              </StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
      </AccordionSummary>
      <AccordionDetails className="p-0">
        <Table>
          <TableBody>
            {orderItems.map((item, index) => (
              <StyledTableRow
                className="border-solid border-[1px] border-t-0 border-[#eee]"
                key={index}
              >
                <StyledTableCell>{item.name}</StyledTableCell>
                <StyledTableCell align="right">{item.price}</StyledTableCell>
              </StyledTableRow>
            ))}
            <StyledTableRow className="border-solid border-[1px] border-t-0 border-[#eee]">
              <StyledTableCell>Payment Methods:</StyledTableCell>
              <StyledTableCell align="right">
                Credit Card: ***** **** 568
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </AccordionDetails>
    </Accordion>
  );
};

export default SingleOrder
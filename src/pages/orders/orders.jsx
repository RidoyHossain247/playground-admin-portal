import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import { dateTime } from '../../helper.js/index.jsx';
import useData from "../../hooks/useData.js";
import EditStatus from './edit-status.jsx';
import OrderItemsModal from './order-item-modal.jsx';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    textAlign: 'center',
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const AllOrder = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [orderId, setOrderId] = useState('')


    const { data: allOrderData } = useData(`/orders?page=1&limit=100`)

    const getStatus = (status) => {
        let result = ''
        if (status === 1) {
            result = 'PENDING'
        } else if (status === 2) {
            result = 'PROCESSING'
        } else if (status === 3) {
            result = 'PICKUP'
        } else if (status === 4) {
            result = 'DELIVERED'
        } else if (status === 5) {
            result = 'CANCELED'
        }
        return result;
    }

    const colorMassage = (status) => {
        let color = ''
        if (status === 1) {
            color = '#c2892f'
        } else if (status === 2) {
            color = '#2a93c7'
        }
        else if (status === 3) {
            color = '#282a61'
        } else if (status === 4) {
            color = '#287d2b'
        } else if (status === 5) {
            color = '#e8360e'
        }
        return color
    }
    const modalHandler = (id) => {
        setIsOpen(true)
        setOrderId(id)
    }

    return (
        <Box>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Order List</Typography>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="customized table">
                    <TableHead sx={{ textAlign: 'center !important' }}>
                        <TableRow >
                            <StyledTableCell sx={{ p: "5px" }} >#</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} >Order ID</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} >Total Quantity</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} >Total Price</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} >Total Discount</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} >Delivery Fee</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} >Order Status</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} >Data Time</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrderData?.data.map((row, i) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{++i}</StyledTableCell>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{row._id}</StyledTableCell>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{row.totalQuantity}</StyledTableCell>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row"> ৳ {row.totalPrice}</StyledTableCell>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row"> ৳ {row.totalDiscount}</StyledTableCell>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row"> ৳ {row.deliveryFee}</StyledTableCell>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">
                                    <Typography
                                        sx={{
                                            padding: "2px",
                                            borderRadius: '3px',
                                            fontSize: "14px",
                                            backgroundColor: colorMassage(row.status),
                                            textAlign: 'center',
                                            color: '#fff',
                                            fontWeight: 'bold'
                                        }}>
                                        {getStatus(row.status)}
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{dateTime(row.createdAt)}</StyledTableCell>

                                <StyledTableCell
                                    sx={{
                                        display: 'flex',
                                        // justifyContent: 'space-between',
                                        justifyContent: 'flex-end',
                                        paddingLeft: '0px'
                                    }}
                                >
                                    {row.status < 4 &&
                                        <EditStatus orderId={row._id} status={row.status} />}
                                    <VisibilityIcon sx={{ cursor: 'pointer', marginLeft: '20px' }} onClick={() => modalHandler(row._id)} color="secondary.light" />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                {isOpen && <OrderItemsModal isOpen={isOpen} setIsOpen={setIsOpen} orderId={orderId} />}
            </TableContainer>
        </Box >
    )
}

export default AllOrder




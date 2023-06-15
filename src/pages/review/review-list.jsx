
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
import CustomPagination from '../../components/custom-pagination';
import { PAGE_SIZE } from '../../const';
import useData from "../../hooks/useData";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
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


const ReviewList = () => {

    const { data, deleteData, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = useData(`/reviews?page=1&limit=${PAGE_SIZE}`)
    const { data: authData } = useData('/users')
    const userData = authData.data
    console.log('sss', data)

    return (
        <Box>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Review List</Typography>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="customized table">
                    <TableHead>
                        <TableRow sx={{}}>
                            <StyledTableCell sx={{ p: "5px" }} >User</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} >Comment</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} >Rating</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data.map((row) => (
                            <StyledTableRow key={row.name}>
                                {userData?.map(item => item._id === row.user?._id &&
                                    <StyledTableCell sx={{ p: 1 }} key={item._id} component="th" scope="row">{item.firstName} {item.lastName}</StyledTableCell>
                                )}
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{row.comment}</StyledTableCell>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{row.rating}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <CustomPagination
                    currentPage={data?.currentPage}
                    totalDocument={data?.totalDocument}
                    rowsPerPage={rowsPerPage}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Box >
    )
}

export default ReviewList

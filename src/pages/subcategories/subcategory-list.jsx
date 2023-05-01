
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
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


const SubcategoryList = () => {
    const { data, deleteData } = useData("/subcategories")
    const navigate = useNavigate()


    return (
        <Box>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Sub Categories List</Typography>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="customized table">
                    <TableHead>
                        <TableRow sx={{}}>
                            <StyledTableCell sx={{ p: "5px" }} >Sub Category Name</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} >Category Name</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{row.name}</StyledTableCell>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{row?.category?.name}</StyledTableCell>
                                <StyledTableCell sx={{ p: 0 }} align="right">
                                    <Button sx={{}} onClick={() => { navigate(`/subcategory/edit/${row._id}`) }}><EditIcon color="secondary.light" /></Button>
                                    <Button sx={{}} onClick={() => {
                                        swal({
                                            title: "Are you sure?",
                                            text: "Once deleted, you will not be able to recover this imaginary file!",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                        })
                                            .then((willDelete) => {
                                                if (willDelete) {
                                                    swal(
                                                        deleteData(row._id),);
                                                }
                                                return
                                            });
                                    }}><DeleteIcon color="error" /></Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
}

export default SubcategoryList


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import swal from 'sweetalert';
import useData from "../../hooks/useData"
import { useNavigate } from 'react-router-dom';


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


const ColorList = () => {
    const navigate = useNavigate()
    
    const { data, deleteData } = useData("/colors")

    return (
        <Box>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Color List</Typography>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="customized table">
                    <TableHead>
                        <TableRow sx={{}}>
                            <StyledTableCell sx={{ p: "5px" }} >Color Name</StyledTableCell>
                            <StyledTableCell sx={{ p: "5px" }} align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{row.name}</StyledTableCell>
                                <StyledTableCell sx={{ p: 0 }} align="right">
                                    <Button onClick={()=> navigate(`/color/edit/${row._id}`)}><EditIcon color="secondary.light" /></Button>
                                    <Button
                                        onClick={() => {
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
                                          }}
                                    ><DeleteIcon color="error" /></Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
}

export default ColorList
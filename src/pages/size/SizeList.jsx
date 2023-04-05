import React from 'react'
import { styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Box, Button, Typography } from '@mui/material';
// icon
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useData from "../../hooks/useData"
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'

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



const SizeList = () => {

  const navigate=useNavigate()
  const { data, deleteData } = useData("/sizes")



  return (
    <Box>
      <Box textAlign="center" mb={2}>
        <Typography fontSize={25} component="h3" color="primary">Size List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow >
              <StyledTableCell sx={{ p: "5px" }} >CL NO</StyledTableCell>
              <StyledTableCell sx={{ p: "5px" }} >Size Name</StyledTableCell>
              <StyledTableCell sx={{ p: "5px" }} align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.length > 0 && data.map((row, index) => (
              <StyledTableRow key={row._id}>

                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{index + 1}</StyledTableCell>
                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{row.name}</StyledTableCell>

                <StyledTableCell sx={{ p: 0 }} align="right">
                  <Button onClick={()=>navigate(`/size/size-edit/${row._id}`)}><EditIcon color="secondary.light" /></Button>
                  <Button onClick={() =>{
                     Swal.fire({
                      title: 'Are you sure?',
                      text: "You won't be able to revert this!",
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText:"Delete"
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire(
                          'Your file has been deleted.','success',
                          deleteData(row._id),
                        )
                      }
                    })
                  } } ><DeleteIcon color="error" /></Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box >
  )
}

export default SizeList

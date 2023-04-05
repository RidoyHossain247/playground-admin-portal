import React from 'react'
import { styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Box, Button, Typography } from '@mui/material';

// icon
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import useData from "../../hooks/useData"

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

const CategoriesList = () => {

  const { data, deleteData } = useData("/categories")
  return (
    <Box>
      <Box textAlign="center" mb={2}>
        <Typography fontSize={25} component="h3" color="primary">Category List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="customized table">
          <TableHead>
            <TableRow sx={{}}>
              <StyledTableCell sx={{ p: "5px" }} >CL NO</StyledTableCell>
              <StyledTableCell sx={{ p: "5px" }} >Category Image</StyledTableCell>
              <StyledTableCell sx={{ p: "5px" }} >Category Name</StyledTableCell>
              <StyledTableCell sx={{ p: "5px" }} align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row,index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{index + 1}</StyledTableCell>
                <img src={row.image} alt="img" width={100} />
                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{row.name}</StyledTableCell>
                <StyledTableCell sx={{ p: 0 }} align="right">
                  <Button sx={{}}><RemoveRedEyeIcon color="secondary.light" /></Button>
                  <Button sx={{}}><EditIcon color="secondary.light" /></Button>
                  <Button sx={{}} onClick={() => deleteData(row._id)}><DeleteIcon color="error" /></Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box >
  )
}

export default CategoriesList

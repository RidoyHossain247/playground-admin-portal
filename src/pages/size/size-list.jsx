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


const SizeList = () => {
  const navigate = useNavigate()
  const { data: sizeData, deleteData, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = useData(`/sizes?page=1&limit=${PAGE_SIZE}`)

  return (
    <Box>
      <Box textAlign="center" mb={2}>
        <Typography fontSize={25} component="h3" color="primary">Size List</Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="customized table">
          <TableHead>
            <TableRow sx={{}}>
              <StyledTableCell sx={{ p: "5px" }} >Sl NO</StyledTableCell>
              <StyledTableCell sx={{ p: "5px" }} >Size Name</StyledTableCell>
              <StyledTableCell sx={{ p: "5px" }} align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sizeData?.data.map((row, index) => (
              <StyledTableRow key={row.name}>

                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{index + 1}</StyledTableCell>
                <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{row.name}</StyledTableCell>
                <StyledTableCell sx={{ p: 0 }} align="right">
                  <Button sx={{}} onClick={() => navigate(`/size/edit/${row._id}`)}><EditIcon color="secondary.light" /></Button>
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
                            "Poof! Your imaginary file has been deleted!",
                            deleteData(row._id),
                            { icon: ["success", true] });
                        }
                        return
                      });
                  }}><DeleteIcon color="error" /></Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <CustomPagination
          currentPage={sizeData?.currentPage}
          totalDocument={sizeData?.totalDocument}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box >
  )
}

export default SizeList
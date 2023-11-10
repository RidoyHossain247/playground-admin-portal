import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import useData from '../../hooks/useData';


import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { dateTime, shortText } from '../../helper.js';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
   textAlign: 'center',
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.Black,
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


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
   '.css-tlc64q-MuiPaper-root-MuiDialog-paper': {
      maxWidth: "900px"
   },
   '& .MuiDialogContent-root': {
      padding: theme.spacing(4),

   },
   // '& .MuiDialogActions-root': {
   //    padding: theme.spacing(3),
   // },
}));


export default function OrderItemsModal({ isOpen, setIsOpen, orderId }) {
   const { data: orderData } = useData(`/orders/${orderId}`)
   const { data: subData } = useData(`/subcategories`)
   const { data: clrData } = useData(`/colors`)
   const { data: sizData } = useData(`/sizes`)
   const pdtData = orderData?.orderItem

   // console.log('pdt', pdtData)


   console.log('orderData', orderData)
   const handleClose = () => {
      setIsOpen(false);
   };

   return (
      <div>
         <BootstrapDialog
            fullWidth
            open={isOpen}
         >
            <Box sx={{ marginLeft: 'auto', p: 3, }}>
               <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => handleClose()} />
            </Box>
            <DialogContent>
               <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}
               >
                  <Box>
                     <Typography sx={{ fontWeight: 'bold' }}>Order ID: {orderData?.order._id}</Typography>
                     <Typography sx={{}}> Total Amount: ৳{orderData?.order?.totalDiscount}</Typography>
                     <Typography sx={{}}>Shipping Address: {orderData?.order?.address}</Typography>

                  </Box>
                  <Box>
                     <Typography sx={{ fontWeight: 'bold' }}>UserID: {orderData?.order?.user?._id}</Typography>
                     <Typography sx={{}}>User Name: {orderData?.order?.user?.firstName} {orderData?.order?.user?.lastName}</Typography>
                     <Typography sx={{}}>Email: {orderData?.order?.user?.email}</Typography>
                     <Typography sx={{}}>Contact: {orderData?.order?.user?.contact}</Typography>
                  </Box>
               </Box>
               <Box>
                  <Typography
                     sx={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        marginBottom: '8px'
                     }}>
                     <span style={{ fontWeight: 'normal', color: '#c1c7c2' }}>Order Time</span> {dateTime(orderData?.order?.createdAt)}
                  </Typography>
               </Box>
               <Box>
                  < TableContainer component={Paper}>
                     <Table aria-label="customized table">
                        <TableHead sx={{ textAlign: 'center !important' }}>
                           <TableRow >
                              <StyledTableCell sx={{ p: "5px" }} >#</StyledTableCell>
                              <StyledTableCell sx={{ p: "5px" }} >Items</StyledTableCell>
                              <StyledTableCell sx={{ p: "5px" }} >Subcategory</StyledTableCell>
                              <StyledTableCell sx={{ p: "5px" }} >Description</StyledTableCell>
                              <StyledTableCell sx={{ p: "5px" }} >Color</StyledTableCell>
                              <StyledTableCell sx={{ p: "5px" }} >Size</StyledTableCell>
                              <StyledTableCell sx={{ p: "5px" }} >Price</StyledTableCell>
                              <StyledTableCell sx={{ p: "5px" }} >Quantity</StyledTableCell>
                              <StyledTableCell sx={{ p: "5px" }} >Total Price</StyledTableCell>
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {pdtData && pdtData?.length !== 0 && pdtData?.map((item, i) => (

                              <StyledTableRow key={item._id}>
                                 <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{++i}</StyledTableCell>
                                 <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{shortText(item?.product?.title, 20)}</StyledTableCell>
                                 {subData?.length !== 0 && subData?.data.map(sub => sub._id == item.product.subcategory &&
                                    <StyledTableCell key={sub._id} sx={{ p: 1 }} component="th" scope="row">{sub.name}</StyledTableCell>
                                 )}
                                 <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{shortText(item?.product?.description, 25)}</StyledTableCell>
                                 {clrData?.length !== 0 && clrData?.data.map(clr => clr._id == item.product.colors &&
                                    <StyledTableCell key={clr._id} sx={{ p: 1 }} component="th" scope="row">{clr.name}</StyledTableCell>
                                 )}
                                 {sizData?.length !== 0 && sizData?.data.map(siz => siz._id == item?.product?.sizes &&
                                    <StyledTableCell key={siz._id} sx={{ p: 1 }} component="th" scope="row">{siz.name}</StyledTableCell>
                                 )}
                                 <StyledTableCell sx={{ p: 1 }} component="th" scope="row">
                                    {item?.product?.discount > 0 &&
                                       <Typography><del style={{ fontSize: '12px', }}> ৳ {item?.product?.discount}</del></Typography>}
                                    <Typography noWrap sx={{}}>৳ {item?.product?.price}</Typography>
                                 </StyledTableCell>
                                 <StyledTableCell sx={{ p: 1 }} component="th" scope="row">{item?.quantity}</StyledTableCell>
                                 <StyledTableCell sx={{ p: 1 }} component="th" scope="row"> ৳ {item?.totalPrice}</StyledTableCell>
                              </StyledTableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </TableContainer>
               </Box>

            </DialogContent>

         </BootstrapDialog>
      </div>
   );
}
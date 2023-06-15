import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import * as React from 'react';

import { Box, Divider, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';
import useData from "../../hooks/useData";


export default function AcountUpdateModal({ open, setOpen, userId }) {
   const { getDetail, updateData } = useData("/users")
   const data = getDetail(`/users/${userId}`)


   const personSchema = yup.object({
      firstName: yup.string().min(2).required("Please enter your first name"),
      lastName: yup.string().min(2).required("Please enter your last name"),
      address: yup.string(),
      address: yup.string().required("Please enter your address"),
      contact: yup.string()
         .min(11)
         .max(11)
         .required('A phone number is required'),
   });

   const initialValues = {
      firstName: data?.firstName ?? "",
      lastName: data?.lastName ?? "",
      address: data?.address ?? "",
      contact: data?.contact ?? ""
   }


   const { values, errors, touched, handleChange, handleSubmit, } = useFormik({
      initialValues,
      onSubmit: async (values, action) => {
         const res = await updateData(values, `/users/${userId}`)
         if (res) {
            action.resetForm()
            handleClose()
         }
      },
      validationSchema: personSchema

   })
   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogContent>
               <Box
                  maxWidth={800}
                  margin={'auto'}
                  marginTop={5}
                  flexDirection={"column"}

               >
                  <Typography
                     sx={{
                        textAlign: "center",
                        mb: 3,
                        fontSize: 26,
                        fontWeight: 'bold'
                     }}
                  >
                     Update Acounce
                  </Typography>
                  <form
                     onSubmit={handleSubmit}
                  >
                     <Divider sx={{ width: "100%", mb: 3 }} />
                     <Box display={'flex'}>
                        <TextField
                           fullWidth
                           placeholder="Enter First Name"
                           type={'text'}
                           sx={{ my: 2, mr: 2 }}
                           variant="outlined"
                           name='firstName'
                           value={values.firstName}
                           onChange={handleChange}
                           error={errors.firstName && touched.firstName && Boolean(errors.firstName)}
                           helperText={errors.firstName && touched.firstName && errors.firstName}
                        />
                        <TextField
                           fullWidth
                           placeholder="Enter Last Name"
                           type={'text'}
                           sx={{ my: 2 }}
                           variant="outlined"
                           name="lastName"
                           value={values.lastName}
                           onChange={handleChange}
                           error={errors.lastName && touched.lastName && Boolean(errors.lastName)}
                           helperText={errors.lastName && touched.lastName && errors.lastName}
                        />
                     </Box>
                     <Box display={'flex'}>

                        <TextField
                           fullWidth
                           placeholder="Enter Address"
                           type='text'
                           sx={{ my: 2 }}
                           variant="outlined"
                           name="address"
                           value={values.address}
                           onChange={handleChange}
                           error={errors.address && touched.address && Boolean(errors.address)}
                           helperText={errors.address && touched.address && errors.address}
                        />
                     </Box>
                     <Box display={'flex'}>
                        <TextField
                           fullWidth
                           placeholder="Contact Number"
                           type='text'
                           sx={{ my: 2 }}
                           variant="outlined"
                           name="contact"
                           value={values.contact}
                           onChange={handleChange}
                           error={errors.contact && touched.contact && Boolean(errors.contact)}
                           helperText={errors.contact && touched.contact && errors.contact}
                        />
                     </Box>

                     <Button
                        fullWidth
                        type="submit"
                        sx={{
                           my: 2,
                           fontSize: 18,
                           color: '#fff',
                           bgcolor: ' #3C1FF4',
                           ":hover": {
                              bgcolor: '#3C1FF4'
                           }
                        }}
                     >
                        Update
                     </Button>
                  </form>
               </Box>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} autoFocus>
                  Cancle
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
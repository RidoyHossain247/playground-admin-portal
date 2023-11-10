import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { useFormik } from "formik"
import * as React from 'react'
import useAuth from "../../hooks/useAuth"
import useData from "../../hooks/useData"
import { ChangePasswordValidaton } from "../../validationError"

const paperStyle = {
   padding: 20,
   width: 400,
   height: 400,
   margin: '20px auto',
   padding: '40px'
}
const initialValues = {
   oldPassword: "",
   password: "",
   confirmPassword: ""
}

const ChangePassword = ({ openModal, setIsOpenModal }) => {
   const { updateData } = useData('/users');
   const { authUser } = useAuth();

   const handleClose = () => {
      setIsOpenModal(false);
   };
   const { values, touched, errors, handleBlur, handleChange, handleSubmit, dirty, isValid, isSubmitting } = useFormik({
      initialValues,
      validationSchema: ChangePasswordValidaton,
      onSubmit: async (value, action) => {
         console.log('value', value)
         const res = await updateData(value, `/users/change-password/${authUser._id}`)
         if (res) {
            action.resetForm()
            setIsOpenModal(false);
         }
      }
   })

   return (
      <Box>
         <Dialog
            open={openModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogContent>
               <Typography
                  textAlign={'center'}
                  fontSize={'24px'}
                  fontWeight={'bold'}
                  marginBottom={'20px'}
               >Change Password</Typography>
               <form onSubmit={handleSubmit}>
                  <Grid
                     container
                     spacing={2}
                  >
                     <Grid item xs={12}>
                        <TextField
                           fullWidth
                           type="password"
                           placeholder="Enter old password"
                           label='Old Password'
                           name="oldPassword"
                           value={values.oldPassword}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           helperText={touched.oldPassword && errors.oldPassword}
                           error={touched.oldPassword && Boolean(errors.oldPassword)}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           fullWidth
                           type="password"
                           placeholder="Enter new password"
                           label='New Password'
                           name="password"
                           value={values.password}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           helperText={touched.password && errors.password}
                           error={touched.password && Boolean(errors.password)}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           fullWidth
                           type="password"
                           placeholder="Enter Confirm password"
                           label='Confirm Password'
                           name="confirmPassword"
                           value={values.confirmPassword}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           helperText={touched.confirmPassword && errors.confirmPassword}
                           error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <Button
                           fullWidth
                           variant="contained"
                           disabled={!dirty || !isValid || isSubmitting}

                           type="submit"
                        >{isSubmitting ? "Submitting.." : 'Save'}</Button>
                     </Grid>
                     <Grid item xs={12}>
                        <Button
                           fullWidth
                           variant="outlined"
                           onClick={handleClose}
                        >Cancel</Button>
                     </Grid>
                  </Grid>
               </form>
            </DialogContent>
         </Dialog>
      </Box>
   );
}

export default ChangePassword
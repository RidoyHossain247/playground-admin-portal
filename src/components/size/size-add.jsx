
import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material"
import { Formik, Form } from 'formik'
import useData from '../../hooks/useData'
import { useNavigate } from 'react-router-dom'

const initValues = {
    name: '',
   
  }

const SizeAdd = () => {
    const { createData, loading } = useData('/sizes')
    const navigate = useNavigate()
    const handleSubmit = async (values, actions) => {
      console.log('values=', values)
      const response = await createData(values)
      if (response) {
        actions.resetForm()
        navigate('/size-list')
      }
    }

    return (
        <>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Size</Typography>
            </Box>

            <Formik   initialValues={initValues} onSubmit={handleSubmit}>
                {(formik) => (
                    <Form>
                        <TextField
                            fullWidth
                            size="small"
                            id="outlined-basic"
                            label="Size Name"
                            variant="outlined"
                            sx={{ my: 1 }}
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}

                        />
                        <Box textAlign="end" mt={3}>
                            <Button sx={{ mr: 1 }} variant="outlined">Reset</Button>
                            <Button variant="contained" type='submit'>{formik.isSubmitting ? 'Loading...' : 'Submit'}</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default SizeAdd





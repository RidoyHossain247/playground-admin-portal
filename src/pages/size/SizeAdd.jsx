import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material"
import { Formik, Form } from 'formik'
import useData from "../../hooks/useData"


const SizeAdd = () => {
  const { sizeCreateData } = useData('/sizes')

  const initValues = {
    name: '',
  }

  const handleSubmit = async (values,actions) => {
    const response = await sizeCreateData(values)
    if (response) {
      actions.resetForm()
      // navigate('/size/size-list')
    }
  }

  return (
    <Box>
      <Box textAlign="center" mb={2}>
        <Typography fontSize={25} component="h3" color="primary">Size Add</Typography>
      </Box>

      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}>
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
              <Button variant="contained" type='submit'>Submit</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box >
  )
}

export default SizeAdd

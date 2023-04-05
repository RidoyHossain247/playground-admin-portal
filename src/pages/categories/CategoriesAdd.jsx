import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material"
import { Formik, Form } from 'formik'
import useData from '../../hooks/useData'
import { useNavigate } from 'react-router-dom'

const CategoriesAdd = () => {
  const initValues = {
    name: '',
    image: ''
  }

  const { createData } = useData('/categories')

  const navigate = useNavigate()

  const handleSubmit = async (values, actions) => {

    const response = await createData(values)
    if (response) {
      actions.resetForm()
      navigate('/categories/categories-list')
    }
  }
  return (
    <Box>
      <Box textAlign="center" mb={2}>
        <Typography fontSize={25} component="h3" color="primary">Category Add</Typography>
      </Box>

      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Category Name"
              variant="outlined"
              sx={{ my: 1 }}
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextField
              type='file'
              fullWidth
              size="small"
              id="outlined-basic"
              name='image'
              onChange={e =>
                formik.setFieldValue('image', e.currentTarget.files[0])
              }
              variant="outlined"
              sx={{ my: 1 }}
              accept='image/*'
            />

            <Box textAlign="end" mt={3}>
              <Button sx={{ mr: 1 }} variant="outlined">Reset</Button>
              <Button variant="contained" type='submit'>{formik.isSubmitting ? 'Loading...' : 'Submit'}</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box >
  )
}

export default CategoriesAdd

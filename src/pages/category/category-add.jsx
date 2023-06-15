import { Box, Button, TextField, Typography } from "@mui/material"
import { Form, Formik, } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import useData from '../../hooks/useData'

const initValues = {
  name: '',
  image: ''
}

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3).max(25)
    .required('Name is required'),
  image: Yup.mixed()
    .required('Image is required')
    // .test('fileSize', 'Image must be less than 1MB', (value) => {
    //   return value && value.size <= 1000000;
    // })
    .test('fileType', 'Only JPG and PNG files are allowed', (value) => {
      return value && ['image/jpeg', 'image/png'].includes(value.type);
    })
});

const AddForm = () => {
  const { createData, loading } = useData('/categories')

  const navigate = useNavigate()

  const handleSubmit = async (values, actions) => {
    console.log('values=', values)
    var formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", values.image);
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    const response = await createData(formData, '/categories', headers)
    if (response) {
      actions.resetForm()
      navigate('/category/list')
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
        validationSchema={validation}
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
              error={formik.errors.name && formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.errors.name && formik.touched.name && formik.errors.name}
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
              error={formik.errors.image && formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.errors.image && formik.touched.image && formik.errors.image}
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

export default AddForm

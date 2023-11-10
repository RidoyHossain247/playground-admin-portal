import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import useData from '../../hooks/useData';
import { colorValidation } from '../../validationError';

const UpdateColor = ({ editItems, editHandler }) => {
    const { getDetail, updateData } = useData("/colors")
    const data = getDetail(`/colors/${editItems}`)


    const initialValues = {
        name: data ? data.name : '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema: colorValidation,
        onSubmit: async (values, action) => {
            console.log(values)
            const res = await updateData(values, `/colors/${editItems}`)
            if (res) {
                action.resetForm()
                editHandler()
            }
        }
    })
    return (
        <Box>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Update Color</Typography>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name && formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name && formik.errors.name}
                />
                <Box textAlign="end" mt={3}>
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={!formik.isValid}
                    >{formik.isSubmitting ? "Loading" : "Update"}</Button>
                </Box>
            </form>

        </Box>
    )
}
export default UpdateColor
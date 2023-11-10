import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useData from '../../hooks/useData';
import { sizeValidation } from '../../validationError';


const UpdateSize = () => {
    const params = useParams()
    const { getDetail, updateData } = useData("/sizes")
    const data = getDetail(`/sizes/${params.id}`)
    const navigate = useNavigate()

    const initialValues = {
        name: data ? data.name : '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema: sizeValidation,
        onSubmit: async (values, action) => {
            console.log(values)
            const res = await updateData(values, `/sizes/${params.id}`)
            if (res) {
                action.resetForm()
                navigate("/size/list")
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
                        onClick={formik.resetForm}
                    >Reset</Button>
                </Box>
                <Box textAlign="end" mt={3}>
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={!formik.isValid}
                    >{formik.isSubmitting ? "Loading" : "Update"}</Button>
                </Box>
            </form >
        </Box >
    )
}

export default UpdateSize
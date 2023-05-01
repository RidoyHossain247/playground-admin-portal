import { useParams } from "react-router-dom"
import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';
import useData from '../../hooks/useData';
import { useNavigate } from 'react-router-dom'

const UpdateColor = () => {
    const params = useParams()
    const { getDetail, updateData } = useData("/colors")
    const data = getDetail(`/colors/${params.id}`)

    const navigate = useNavigate()

    const initialValues = {
        name: data ? data.name : '',
    };

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, action) => {
            console.log(values)
            const res = await updateData(values, `/colors/${params.id}`)
            if (res) {
                action.resetForm()
                navigate('/color/list')
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
                />
                <Box textAlign="end" mt={3}>
                    <Button variant="contained" type="submit">{formik.isSubmitting ? "Loading" : "Update"}</Button>
                </Box>
            </form>
        </Box>
    )
}
export default UpdateColor
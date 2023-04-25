import { useParams } from "react-router-dom"
import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';
import useData from '../../hooks/useData';
import { useNavigate } from 'react-router-dom'


const UpdateSize = () => {
    const params = useParams()
    const { getDetail, updateData } = useData("/sizes")
    const data = getDetail(`/sizes/${params.id}`)
    const navigate =useNavigate()

    const initialValues = {
        name: data? data.name:'',
    };

    const formik =useFormik({
        initialValues,
        onSubmit:(values,action)=>{
            console.log(values)
            updateData(values,`/sizes/${params.id}`)
            action.resetForm()
            navigate('/size/list')

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

export default UpdateSize
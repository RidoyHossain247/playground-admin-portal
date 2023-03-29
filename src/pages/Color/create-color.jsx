

import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';
import * as yup from 'yup'
import useData from '../../hooks/useData';


const CreateColor = () => {

    const { createData } = useData("/colors")

    const initialValues = {
        name: '',
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (values, action) => {
            console.log(values);
            createData(values)
        }
    });

    const handleReset = () => {
        formik.resetForm();
    };

    return (
        <Box>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Add Color</Typography>
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
                    <Button sx={{ mr: 1 }} variant="outlined" type="button" onClick={handleReset}>Reset</Button>
                    <Button variant="contained" type="submit">{formik.isSubmitting ? "Loading" : "Submit"}</Button>
                </Box>
            </form>
        </Box>
    );
};

export default CreateColor;
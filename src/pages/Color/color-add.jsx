

import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useData from '../../hooks/useData';
import { colorValidation } from '../../validationError';

const ColorAdd = ({ editHandler }) => {

    const navigate = useNavigate()

    const { createData } = useData("/colors")

    const initialValues = {
        name: '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema: colorValidation,
        onSubmit: async (values, action) => {
            console.log(values);
            const res = await createData(values)
            if (res) {
                action.resetForm()
                editHandler()
            }
        },
    });

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
                    onBlur={formik.handleBlur}
                    error={formik.errors.name && formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name && formik.errors.name}
                />
                <Box textAlign="end" mt={3}>
                    <Button sx={{ mr: 1 }} variant="outlined" type="button" onClick={formik.resetForm}>Reset</Button>
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={!formik.dirty || !formik.isValid}
                    >{formik.isSubmitting ? "Loading" : "Submit"}</Button>
                </Box>
            </form>
        </Box>
    );
};

export default ColorAdd;
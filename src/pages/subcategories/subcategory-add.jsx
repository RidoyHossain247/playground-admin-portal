

import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box, Typography, MenuItem, Select, FormControl } from '@mui/material';
import * as yup from 'yup'
import useData from '../../hooks/useData';
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

const SubcategoriesAdd = () => {
    const navigate = useNavigate()

    const { data, createData } = useData("/categories")

    const initialValues = {
        name: '',
        category: ''
    };
    const formik = useFormik({
        initialValues,
        onSubmit: (values, action) => {
            console.log("values",values);

                createData(values,"/subcategories" )
                navigate('/subcategory/list')
        }
    });

    const handleReset = () => {
        formik.resetForm();
    };

    return (
        <Box>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Add Sub Categories</Typography>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <Box marginBottom={3}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />

                </Box>
                <Box >
                        <Select
                        fullWidth
                            displayEmpty
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            name="category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {data && data.length !== 0 && data.map((item) =>
                                <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                            )}
                        </Select>
                </Box>
                <Box textAlign="end" mt={3}>
                    <Button sx={{ mr: 1 }} variant="outlined" type="button" onClick={handleReset}>Reset</Button>
                    <Button variant="contained" type="submit">{formik.isSubmitting ? "Loading" : "Submit"}</Button>
                </Box>
            </form>
        </Box>
    );
};

export default SubcategoriesAdd;


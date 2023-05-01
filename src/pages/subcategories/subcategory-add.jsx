
import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useData from '../../hooks/useData';

const SubcategoriesAdd = () => {
    const navigate = useNavigate()

    const { data: catData, createData } = useData("/categories")
    const initialValues = {
        name: '',
        category: ''
    };
    const formik = useFormik({
        initialValues,
        onSubmit: async (values, action) => {
            console.log("values", values);
            const res = await createData(values, "/subcategories")
            if (res) {
                action.resetForm()
                navigate("/subcategory/list")
            }
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
                            <em>Category</em>
                        </MenuItem>
                        {catData?.data && catData.data.length !== 0 && catData.data.map((item) =>
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


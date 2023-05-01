import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useData from '../../hooks/useData';


const UpdateSubcategory = () => {
    const params = useParams()
    const navigate = useNavigate()

    const { getDetail, updateData } = useData("/subcategories")
    const { data: catData } = useData("/categories")

    const scatData = getDetail(`/subcategories/${params.id}`)
    console.log('ss', scatData)
    const initialValues = {
        name: scatData ? scatData.name : '',
        category: scatData ? scatData.category?._id : ''
    };
    const formik = useFormik({
        initialValues,
        onSubmit: async (values, action) => {
            console.log("values", values);
            const res = await updateData(values, `/subcategories/${params.id}`)
            if (res) {
                action.resetForm()
                navigate("/subcategory/list")
            }
        }
    });
    return (
        <Box>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Update Sub Categories</Typography>
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
                        {catData?.data && catData.data.length !== 0 && catData?.data.map((item) =>
                            <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                        )}
                    </Select>
                </Box>
                <Box textAlign="end" mt={3}>
                    <Button variant="contained" type="submit">{formik.isSubmitting ? "Loading" : "Update"}</Button>
                </Box>
            </form>
        </Box>
    );
}

export default UpdateSubcategory
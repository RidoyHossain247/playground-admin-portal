import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box, Typography, MenuItem, Select } from '@mui/material';
import useData from '../../hooks/useData';
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"


const UpdateSubcategory=()=>{
    const params=useParams()
    const navigate = useNavigate()

    const {getDetail,updateData}=useData("/subcategories")
    const {data}=useData("/categories")

    const scatData= getDetail(`/subcategories/${params.id}`)
    const initialValues = {
        name: scatData? scatData.name:'',
        category: scatData? scatData.category._id:''
    };
    const formik = useFormik({
        initialValues,
        onSubmit: (values, action) => {
            console.log("values",values);

            updateData(values,`/subcategories/${params.id}` )
                navigate('/subcategory/list')
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
                            {data && data.length !== 0 && data?.map((item) =>
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
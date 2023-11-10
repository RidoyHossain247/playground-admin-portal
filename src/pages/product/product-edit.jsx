
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import { productValidation } from '../../validationError';


const paperStyle = {
    padding: 20,
    width: 800,
    height: '75vh',
    margin: '20px auto',
    padding: '20px'
}
const ProductEdit = () => {

    const params = useParams()
    const { data: catData } = useData("/categories")
    const { data: scatData } = useData("/subcategories")
    const { data: sizeData } = useData("/sizes")
    const { data: colorData } = useData("/colors")
    const { updateData, getDetail } = useData(`/products`)
    const data = getDetail(`/products/${params.id}`)
    const naviget = useNavigate()
    console.log('dd', data)

    const initialValues = {
        title: data ? data.title : "",
        description: data ? data.description : "",
        price: data ? data.price : "",
        discount: data ? data.discount : "",
        category: data ? data.subcategory.category : "",
        subcategory: data ? data.subcategory?._id : "",
        // deliverable: data ? data.deliverable : '',
        colors: data ? data.colors : [],
        sizes: data ? data.sizes : [],
        image: ""
    }

    const { values, handleChange, handleSubmit, isValid, errors, touched, handleBlur, setFieldValue } = useFormik({
        initialValues,
        validationSchema: productValidation,
        onSubmit: async (values, action) => {
            console.log('values', values)
            var formData = new FormData()
            formData.append("title", values.title)
            formData.append("price", values.price)
            formData.append("description", values.description)
            formData.append("discount", values.discount)
            formData.append("category", values.subcategory.category)
            // formData.append("deliverable", values.deliverable)
            formData.append("subcategory", values.subcategory)
            formData.append("sizes", JSON.stringify(values.sizes))
            formData.append("colors", JSON.stringify(values.colors))
            formData.append("image", values.image)
            const headers = {
                'Content-Type': 'multipart/form-data',
            }
            const res = await updateData(formData, `/products/${params.id}`, headers)
            if (res) {
                action.resetForm()
                naviget("/product/list")
            }
        }
    })



    return (
        <Container>
            <Paper
                elevation={8}
                style={paperStyle}
            >
                <form onSubmit={handleSubmit}>
                    <Typography
                        variant="h4"

                        sx={{
                            textAlign: "center",
                            marginBottom: "25px",
                        }}
                    >
                        Product Add
                    </Typography>
                    <Grid
                        container
                        spacing={2}

                    >
                        <Grid item xs={6}>
                            <TextField
                                rows={4}
                                fullWidth
                                type='text'
                                name='title'
                                label="Title"
                                placeholder='Enter Title'
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.title && errors.title}
                                error={touched.title && Boolean(errors.title)}

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="category-label">Category</InputLabel>
                                <Select
                                    labelId="category-label"
                                    label="Category"
                                    name="category"
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.category && errors.category}
                                    error={touched.category && Boolean(errors.category)}
                                >
                                    {catData?.data?.map(item =>

                                        <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                                    )}

                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="subcategory-label">Subcategory</InputLabel>
                                <Select
                                    labelId="subcategory-label"
                                    label="Subcategory"
                                    name="subcategory"
                                    value={values.subcategory}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.subcategory && errors.subcategory}
                                    error={touched.subcategory && Boolean(errors.subcategory)}
                                >
                                    {scatData?.data?.map((item) => item.category._id === values.category &&
                                        <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                                    )}

                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type='number'
                                name='price'
                                label="Price"
                                placeholder='Ener Price'
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.price && errors.price}
                                error={touched.price && Boolean(errors.price)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type='number'
                                name='discount'
                                label="Discount"
                                placeholder='Ener Discount'
                                value={values.discount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.discount && errors.discount}
                                error={touched.discount && Boolean(errors.discount)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography fontSize={"18px"} >Sizes :</Typography>
                            <Box
                                display='flex'
                                marginTop={-1}
                            >
                                {sizeData?.data?.map((item) => (
                                    <FormControlLabel
                                        key={item._id}
                                        control={
                                            <Checkbox
                                                size='small'
                                                name="sizes"
                                                value={item._id}
                                                checked={values.sizes.includes(item._id)}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.sizes && errors.sizes}
                                                error={touched.sizes && Boolean(errors.sizes)}
                                            />
                                        }
                                        label={item.name}
                                    />
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Description"
                                placeholder='Write a short description'
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                fullWidth
                                onBlur={handleBlur}
                                helperText={touched.description && errors.description}
                                error={touched.description && Boolean(errors.description)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <Typography fontSize={"18px"}>Colors</Typography>
                                <Box display="flex">
                                    {colorData?.data?.map((item) => (
                                        <FormControlLabel
                                            key={item._id}
                                            control={
                                                <Checkbox
                                                    size='small'
                                                    name='colors'
                                                    value={item._id}
                                                    checked={values.colors.includes(item._id)}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    helperText={touched.colors && errors.colors}
                                                    error={touched.colors && Boolean(errors.colors)}
                                                />
                                            }
                                            label={item.name}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
                                onBlur={handleBlur}
                                helperText={touched.image && errors.image}
                                error={touched.image && Boolean(errors.image)}
                            />
                        </Grid>
                        {/* <Grid item xs={6}>
                            <RadioGroup
                                name="deliverable"
                                value={values.deliverable}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.deliverable && errors.deliverable}
                                error={touched.deliverable && Boolean(errors.deliverable)}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Can be deliverable" />
                            </RadioGroup>
                        </Grid> */}
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        marginLeft="auto"
                        sx={{
                            marginTop: "10px",
                            marginLeft: 'auto'
                        }}
                        disabled={!isValid}
                    >Submit</Button>
                </form>
            </Paper>
        </Container >
    )
}
export default ProductEdit
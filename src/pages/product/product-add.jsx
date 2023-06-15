import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import useData from "../../hooks/useData"

const ProductAdd = () => {

    const { createData } = useData("/products")
    const { data: catData } = useData(`/categories?page=1&limit=100`)
    const { data: scatData } = useData("/subcategories?page=1&limit=100")
    const { data: sizeData } = useData("/sizes")
    const { data: colorData } = useData("/colors")
    const naviget = useNavigate()

    const initialValues = {
        title: "",
        description: "",
        price: "",
        discount: "",
        category: "",
        subcategory: "",
        colors: [],
        sizes: [],
        image: ""
    }

    const { values, handleChange, handleSubmit, errors, touched, setFieldValue } = useFormik({
        initialValues,
        onSubmit: async (values, action) => {
            console.log('values', values)
            let formData = new FormData()
            formData.append("title", values.title)
            formData.append("price", values.price)
            formData.append("description", values.description)
            formData.append("discount", values.discount)
            formData.append("category", values.category)
            formData.append("subcategory", values.subcategory)
            formData.append("sizes", JSON.stringify(values.sizes))
            formData.append("colors", JSON.stringify(values.colors))
            formData.append("image", values.image)
            const headers = {
                'Content-Type': 'multipart/form-data',
            }

            const res = await createData(formData, "/products", headers)
            if (res) {
                action.resetForm()
                naviget("/product/list")
            }
        }
    })



    return (
        <form
            onSubmit={handleSubmit}
        >
            <Box maxWidth={800}
                margin={'auto'}
            >
                <Typography
                    sx={{
                        fontSize: "30px",
                        textAlign: 'center',
                        fontWeight: '600'
                    }}
                >
                    Product add
                </Typography>
                <Box
                    gap={3}
                    sx={{
                        display: 'flex',
                        marginBottom: '30px',
                        marginTop: '30px'
                    }}>
                    <TextField
                        fullWidth
                        label="Title"
                        variant="outlined"
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Price"
                        variant="outlined"
                        type="number"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                    />
                </Box>

                <Box
                    gap={3}
                    sx={{
                        display: 'flex',
                        marginBottom: '30px'
                    }}>
                    <TextField
                        fullWidth
                        label="Discount Price"
                        variant="outlined"
                        type="number"
                        name="discount"
                        value={values.discount}
                        onChange={handleChange}
                    />
                    <Select
                        fullWidth
                        displayEmpty
                        value={values.category}
                        onChange={handleChange}
                        name="category"
                    // label="Subcategory"
                    >
                        <MenuItem value="">
                            <em>Category</em>
                        </MenuItem>
                        {catData?.data && catData.data.length !== 0 && catData.data?.map((item) =>
                            <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                        )}
                    </Select>
                </Box>
                <Box
                    gap={3}
                    sx={{
                        display: 'flex',
                        marginBottom: '30px'
                    }}>
                    <Select
                        fullWidth
                        displayEmpty
                        value={values.subcategory}
                        onChange={handleChange}
                        name="subcategory"
                    // label="Subcategory"
                    >
                        <MenuItem value="">
                            <em>Subcategory</em>
                        </MenuItem>
                        {scatData?.data && scatData.data.length !== 0 && scatData.data?.map((item) => item.category._id === values.category &&
                            <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                        )}
                    </Select>
                    <Select
                        fullWidth
                        displayEmpty
                        value={values.colors}
                        onChange={handleChange}
                        name="colors"
                    >
                        <MenuItem value="">
                            <em>Colors</em>
                        </MenuItem>
                        {colorData?.data && colorData.data.length !== 0 && colorData.data?.map((item) =>
                            <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                        )}
                    </Select>
                </Box>
                <Box
                    gap={3}
                    sx={{ display: 'flex', marginBottom: '30px' }}
                >
                    <Select
                        fullWidth
                        displayEmpty
                        value={values.sizes}
                        onChange={handleChange}
                        name="sizes"
                    >
                        <MenuItem value="">
                            <em>Sizes</em>
                        </MenuItem>
                        {sizeData?.data && sizeData.data.length !== 0 && sizeData.data?.map((item) =>
                            < MenuItem key={item._id} value={item._id} >{item.name}</MenuItem>
                        )}
                    </Select>
                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        type="text"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                    />
                </Box>
                <TextField
                    fullWidth
                    variant="outlined"
                    type="file"
                    onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
                    accept="image/*"
                />

                <Box gap={3} sx={{ textAlign: 'end', marginTop: '12px' }}>
                    <Button variant="outlined">Reset</Button>
                    <Button type="submit" variant="contained" sx={{ marginLeft: '30px' }} >Submit</Button>
                </Box>

            </Box>
        </form >
    )
}
export default ProductAdd
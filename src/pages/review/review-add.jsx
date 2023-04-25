import { Box, Typography, Button, TextField } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'; import { useStoreState } from "easy-peasy"
import useData from "../../hooks/useData";
import { useFormik, validateYupSchema } from "formik";
import { useNavigate } from "react-router-dom";

const ReviewAdd = () => {

    const { createData } = useData('/reviews')
    const product = useData('/products')
    const authData = useData('/users')

    const userData = authData.data
    const pdtData = product.data?.result

    const Naviget=useNavigate()

    const initialValues = {
        product: "",
        user: "",
        comment: "",
        rating: ""
    }
    const { values, handleChange, handleSubmit, touched, errors } = useFormik({
        initialValues,
       
        onSubmit: (values, action) => {
            console.log("values", values)
            createData(values, '/reviews',)
            Naviget('/review/list')
        }
    })


    return (

        <Box
            maxWidth={800}
            margin={'auto'}
        >
            <form
                onSubmit={handleSubmit}
            >
                <Typography
                    sx={{
                        fontSize: "30px",
                        textAlign: 'center',
                        fontWeight: '600'
                    }}
                >
                    Review add
                </Typography>
                <Box
                    gap={3}
                    sx={{
                        display: 'flex',
                        marginBottom: '30px',
                        marginTop: '30px'
                    }}
                >
                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Product</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Product"
                            value={values.product}
                            onChange={handleChange}
                            name="product"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {pdtData && pdtData.length !== 0 && pdtData.map((item) =>
                                <MenuItem key={item._id} value={item._id}>{item.title}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">User</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="User"
                            value={values.user}
                            onChange={handleChange}
                            name="user"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {userData && userData.length !== 0 && userData?.map((item) =>
                                <MenuItem key={item._id} value={item._id}>{item.firstName} {item.lastName}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Box>
                <Box
                    gap={3}
                    sx={{
                        display: 'flex',
                        marginBottom: '30px',
                        marginTop: '30px'
                    }}
                >
                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
                        <TextField
                            type="text"
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Comments"
                            value={values.comment}
                            onChange={handleChange}
                            name="comment"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Rating</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Rating"
                            value={values.rating}
                            onChange={handleChange}
                            name="rating"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'1'}>1</MenuItem>
                            <MenuItem value={'2'}>2</MenuItem>
                            <MenuItem value={'3'}>3</MenuItem>
                            <MenuItem value={'4'}>4</MenuItem>
                            <MenuItem value={'5'}>5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box gap={3} sx={{ textAlign: 'end' }}>
                    <Button variant="outlined">Reset</Button>
                    <Button type="submit" variant="contained" sx={{ marginLeft: '30px' }} >Submit</Button>
                </Box>
            </form>
        </Box>
    )
}
export default ReviewAdd
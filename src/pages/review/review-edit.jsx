// import { Box, Button, TextField, Typography } from "@mui/material";
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import { useFormik } from "formik";
// import { useParams } from "react-router-dom";
// import useData from "../../hooks/useData";

// const ReviewEdit = () => {
//     const params = useParams()
//     const { updateData, getDetail } = useData('/reviews')
//     const data = getDetail(`/reviews/${params.id}`)

//     const initialValues = {
//         comment: data ? data.comment : "",
//         rating: data ? data.rating : ""
//     }
//     const { values, handleChange, handleSubmit, touched, errors } = useFormik({
//         initialValues,

//         onSubmit: (values, action) => {
//             console.log("values", values)
//             updateData(values, `/reviews/${params.id}`,)
//         }
//     })


//     return (
//         <Box
//             maxWidth={800}
//             margin={'auto'}
//         >
//             <form
//                 onSubmit={handleSubmit}
//             >
//                 <Typography
//                     sx={{
//                         fontSize: "30px",
//                         textAlign: 'center',
//                         fontWeight: '600'
//                     }}
//                 >
//                     Review Update
//                 </Typography>
//                 <Box
//                     gap={3}
//                     sx={{
//                         display: 'flex',
//                         marginBottom: '30px',
//                         marginTop: '30px'
//                     }}
//                 >
//                     <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
//                         <TextField
//                             type="text"
//                             labelId="demo-select-small"
//                             id="demo-select-small"
//                             label="Comments"
//                             value={values.comment}
//                             onChange={handleChange}
//                             name="comment"
//                         />
//                     </FormControl>
//                     <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
//                         <InputLabel id="demo-select-small">Rating</InputLabel>
//                         <Select
//                             labelId="demo-select-small"
//                             id="demo-select-small"
//                             label="Rating"
//                             value={values.rating}
//                             onChange={handleChange}
//                             name="rating"
//                         >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>
//                             <MenuItem value={'1'}>1</MenuItem>
//                             <MenuItem value={'2'}>2</MenuItem>
//                             <MenuItem value={'3'}>3</MenuItem>
//                             <MenuItem value={'4'}>4</MenuItem>
//                             <MenuItem value={'5'}>5</MenuItem>
//                         </Select>
//                     </FormControl>
//                 </Box>
//                 <Box gap={3} sx={{ textAlign: 'end' }}>
//                     <Button variant="outlined">Reset</Button>
//                     <Button type="submit" variant="contained" sx={{ marginLeft: '30px' }} >Update</Button>
//                 </Box>
//             </form>
//         </Box>
//     )
// }
// export default ReviewEdit
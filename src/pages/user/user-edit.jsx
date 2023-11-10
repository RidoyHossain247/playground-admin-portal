
import { Box, Button, Divider, TextField, Typography, } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from 'yup';
import useData from "../../hooks/useData";

const UpdateUser = () => {
    const params = useParams()
    const { getDetail, updateData } = useData("/users")
    const data = getDetail(`/users/${params.id}`)

    const navigate = useNavigate()



    const personSchema = yup.object({
        firstName: yup.string().min(2).required("Please enter your first name"),
        lastName: yup.string().min(2).required("Please enter your last name"),
        address: yup.string(),
        address: yup.string().required("Please enter your address"),
        contact: yup.string()
            .min(11)
            .max(11)
            .required('A phone number is required'),
    });

    const initialValues = {
        firstName: data.firstName ?? "",
        lastName: data.lastName ?? "",
        address: data.address ?? "",
        contact: data.contact ?? ""
    }

    const { values, errors, touched, handleChange, handleSubmit, handleBlur, isValid, isSubmitting } = useFormik({
        initialValues,
        validationSchema: personSchema,
        onSubmit: async (values, action) => {
            const res = await updateData(values, `/users/${params.id}`)
            if (res) {
                action.resetForm()
                navigate("/user/list")
            }
        },

    })


    return (
        <Box
            maxWidth={800}
            margin={'auto'}
            marginTop={5}
            flexDirection={"column"}

        >
            <Typography
                sx={{
                    textAlign: "center",
                    mb: 3,
                    fontSize: 26,
                    fontWeight: 'bold'
                }}
            >
                Update User
            </Typography>
            <form
                onSubmit={handleSubmit}
            >
                <Divider sx={{ width: "100%", mb: 3 }} />
                <Box display={'flex'}>
                    <TextField
                        fullWidth
                        placeholder="Enter First Name"
                        type={'text'}
                        sx={{ my: 2, mr: 2 }}
                        variant="outlined"
                        name='firstName'
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.firstName && touched.firstName && Boolean(errors.firstName)}
                        helperText={errors.firstName && touched.firstName && errors.firstName}
                    />
                    <TextField
                        fullWidth
                        placeholder="Enter Last Name"
                        type={'text'}
                        sx={{ my: 2 }}
                        variant="outlined"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.lastName && touched.lastName && Boolean(errors.lastName)}
                        helperText={errors.lastName && touched.lastName && errors.lastName}
                    />
                </Box>
                <Box display={'flex'}>

                    <TextField
                        fullWidth
                        placeholder="Enter Address"
                        type='text'
                        sx={{ my: 2 }}
                        variant="outlined"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.address && touched.address && Boolean(errors.address)}
                        helperText={errors.address && touched.address && errors.address}
                    />
                </Box>
                <Box display={'flex'}>
                    <TextField
                        fullWidth
                        placeholder="Contact Number"
                        type='text'
                        sx={{ my: 2 }}
                        variant="outlined"
                        name="contact"
                        value={values.contact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.contact && touched.contact && Boolean(errors.contact)}
                        helperText={errors.contact && touched.contact && errors.contact}
                    />
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    type='submit'
                    size={"large"}
                    conta
                    disabled={!isValid}
                >
                    {isSubmitting ? "Lodding" : "Submit"}
                </Button>
            </form>
        </Box>
    )
}

export default UpdateUser
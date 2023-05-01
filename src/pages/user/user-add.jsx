
import { Box, Button, Divider, TextField, Typography, } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import useAuth from "../../hooks/useAuth";

const AddUser = () => {
    const { handelRegistration } = useAuth()

    const navigate = useNavigate()



    const personSchema = yup.object({
        firstName: yup.string().min(2).required("Please enter your first name"),
        lastName: yup.string().min(2).required("Please enter your last name"),
        email: yup.string().email().required("Please enter your email"),
        password: yup.string().min(2).max(6).required("Please enter your password"),
        confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'confirm passwords does not match'),
        contact: yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(8)
            .required('A phone number is required'),
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        contact: ""
    }

    const { values, errors, touched, handleChange, handleSubmit, } = useFormik({
        initialValues,
        onSubmit: async (values, action) => {
            console.log("value", values)
            const res = await handelRegistration("/users", values)
            if (res) {
                action.resetForm()
                navigate("/user/list")
            }
        },
        validationSchema: personSchema

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
                Sing Up
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
                        error={errors.lastName && touched.lastName && Boolean(errors.lastName)}
                        helperText={errors.lastName && touched.lastName && errors.lastName}
                    />
                </Box>
                <Box display={'flex'}>
                    <TextField
                        fullWidth
                        placeholder="Enter Email"
                        type={'email'}
                        sx={{ my: 2, mr: 2 }}
                        variant="outlined"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email && touched.email && Boolean(errors.email)}
                        helperText={errors.email && touched.email && errors.email}
                    />
                    <TextField
                        fullWidth
                        placeholder="Enter Password"
                        type='password'
                        sx={{ my: 2 }}
                        variant="outlined"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        error={errors.password && touched.password && Boolean(errors.password)}
                        helperText={errors.password && touched.password && errors.password}
                    />
                </Box>
                <Box display={'flex'}>
                    <TextField
                        fullWidth
                        placeholder="Enter ConfirmPassword"
                        type='password'
                        sx={{ my: 2, mr: 2 }}
                        variant="outlined"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword && touched.confirmPassword && Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                    />
                    <TextField
                        fullWidth
                        placeholder="Contact Number"
                        type='number'
                        sx={{ my: 2 }}
                        variant="outlined"
                        name="contact"
                        value={values.contact}
                        onChange={handleChange}
                        error={errors.contact && touched.contact && Boolean(errors.contact)}
                        helperText={errors.contact && touched.contact && errors.contact}
                    />
                </Box>

                <Button
                    fullWidth
                    type="submit"
                    sx={{
                        my: 2,
                        fontSize: 18,
                        color: '#fff',
                        bgcolor: ' #3C1FF4',
                        ":hover": {
                            bgcolor: '#3C1FF4'
                        }
                    }}
                >
                    Submit
                </Button>
            </form>
        </Box>
    )
}

export default AddUser
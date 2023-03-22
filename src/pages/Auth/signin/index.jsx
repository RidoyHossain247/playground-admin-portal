
import { Box, TextField, Button, Typography, Link, Divider, } from "@mui/material"
import { useStoreActions } from "easy-peasy";
import { useFormik } from "formik";
import jwtDecode from "jwt-decode";
import * as yup from 'yup'
import api from '../../../service'
import { Navigate } from "react-router-dom"

const SignInPage = () => {

    const authAction = useStoreActions((action) => action.auth);

    const personSchema = yup.object({
        email: yup.string().email().required("Please enter your email"),
        password: yup.string().min(2).max(6).required("Please enter your password")
    });

    const initialValues = {

        email: "",
        password: "",

    }

    const { values, errors, touched, handleChange, handleSubmit, } = useFormik({
        initialValues,
        onSubmit: async (values, action) => {
            console.log("value", values)
            const res = await api.post("/auth/login", initialValues)
            const token = res.data.data
            const user = jwtDecode(token)
            authAction.login({
                user,
                token
            })
            action.resetForm()
            Navigate("/")
        },
        validationSchema: personSchema

    })


    return (
        <Box
            display={'flex'}
            maxWidth={400}
            padding={10}
            margin={'auto'}
            alignItems='center'
            marginTop={5}
            flexDirection={"column"}
            boxShadow={'5px 5px 12px #ccc'}
            sx={{
                ":hover": {
                    boxShadow: '10px 10px 20px #ccc'
                }
            }}
        >
            <Typography
                sx={{
                    mb: 3,
                    fontSize: 26,
                    fontWeight: 'bold'
                }}
            >
                SingIn
            </Typography>
            <Divider sx={{ width: "100%", mb: 3 }} />
            <form
                onSubmit={handleSubmit}
            >
                <TextField
                    fullWidth
                    placeholder="Enter Email"
                    type='text'
                    sx={{ my: 2 }}
                    variant="outlined"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email && touched.email && Boolean(errors.email)}
                    helperText={errors.email && touched.email && errors.email}
                />
                <TextField
                    fullWidth
                    placeholder="Enter Password"
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    sx={{ my: 2 }}
                    variant="outlined"
                    error={errors.password && touched.password && Boolean(errors.password)}
                    helperText={errors.password && touched.password && errors.password}
                />
                <Link
                    href="#"
                    underline="none"
                    sx={{
                        ml: 'auto',
                        mb: 3,
                        color: 'rgba(0, 0, 0, 0.68)'
                    }}
                >
                    Forgot Password
                </Link>
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
                    SingIn
                </Button>
            </form>
            <Typography>Don't have an account? </Typography>
            <Button
                fullWidth
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
                SignUp
            </Button>
        </Box>
    )
}

export default SignInPage
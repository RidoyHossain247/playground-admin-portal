
import { Box, Button, Divider, TextField, Typography, } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import useAuth from "../../../hooks/useAuth";

const SignInPage = () => {
    const { handelLogin } = useAuth()
    const navigate = useNavigate()

    const personSchema = yup.object({
        email: yup.string().email().required("Please enter your email"),
        password: yup.string().min(6).required("Please enter your password")
    });

    const initialValues = {
        email: "",
        password: "",
    }

    const { values, errors, touched, handleChange, handleSubmit, handleBlur, dirty, isValid, isSubmitting } = useFormik({
        initialValues,
        onSubmit: async (values, action) => {
            console.log("value", values)
            const res = await handelLogin(values)
            if (res) {
                action.resetForm()
                navigate("/")
            }
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
                Sing In
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
                    sx={{ my: 2 }}
                    variant="outlined"
                    error={errors.password && touched.password && Boolean(errors.password)}
                    helperText={errors.password && touched.password && errors.password}
                />
                <Link
                    href="#"
                    style={{
                        marginLeft: 'auto',
                        mb: 3,
                        textDecoration: "none",
                        color: 'rgba(0, 0, 0, 0.68)'
                    }}
                >
                    Forgot Password
                </Link>
                <Button
                    sx={{
                        my: '8px',
                    }}
                    fullWidth
                    type="submit"
                    size={"large"}
                    variant="contained"
                    disabled={!dirty || !isValid}

                >
                    {isSubmitting ? "Lodding.." : "  SingIn"}
                </Button>
            </form>
            <Box sx={{ display: "flex", marginRight: "auto" }}>

                <Typography sx={{ mr: 2, }}>Don't have an account? </Typography>
                <Link to="/signup"
                    style={{
                        textDecoration: "none",
                        color: '#3C1FF4',
                    }}>Sign Up</Link>

            </Box>
        </Box>
    )
}

export default SignInPage
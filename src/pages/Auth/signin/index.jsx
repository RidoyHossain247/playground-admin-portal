
import { Box, TextField, Button, Typography, Divider, } from "@mui/material"
import { useFormik } from "formik";
import * as yup from 'yup'
import useAuth from "../../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom"

const SignInPage = () => {

    const { handelLogin } = useAuth()

    const navigate = useNavigate()



    const personSchema = yup.object({
        email: yup.string().email().required("Please enter your email"),
        password: yup.string().min(2).max(10).required("Please enter your password")
    });

    const initialValues = {

        email: "",
        password: "",

    }

    const { values, errors, touched, handleChange, handleSubmit, } = useFormik({
        initialValues,
        onSubmit: (values, action) => {
            console.log("value", values)
            handelLogin(values)
            action.resetForm()
            navigate("/")
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
            <Box sx={{ display: "flex", marginRight: "auto" }}>

                <Typography sx={{ mr: 2, }}>Don't have an account? </Typography>
                <Link to="/signup"
                    style={{
                        textDecoration: "none",
                        color: '#3C1FF4',
                    }}>Sign Up</Link>

            </Box>
            {/* <Button
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
            </Button> */}
        </Box>
    )
}

export default SignInPage
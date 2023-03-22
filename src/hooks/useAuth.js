import { useState } from "react"
import api from '../service/index';
import jwtDecode from 'jwt-decode';
import { Navigate } from "react-router-dom"
import { useStoreActions } from "easy-peasy";


const UseAuth = () => {
    const [state, setState] = useState({})
    const [error, setError] = useState(null)


    // Global Action
    const authAction = useStoreActions((action) => action.auth);

    // Change Handler
    const ChangeHandler = (event) => {

        setState({
            ...state,
            [event.target.name]: event.target.value
        })

    }

    // Handel Login
    const HandelLogin = async () => {
        const { email, password } = state;

        if (!email || !password) {
            setError("Email & password is required field!")
            return
        }
        setError(null)


        try {
            const formData = {
                email: email,
                password: password,
            }
            const res = await api.post("/auth/login", formData)
            const token = res.data.data;
            const user = jwtDecode(token)
            authAction.login({
                user,
                token
            });
            Navigate("/")
        } catch (error) {
            setError(error.res.data.massage)
            console.log("error", error)
        }
    }

    return {
        error,
        state,
        HandelLogin,
        ChangeHandler,
    }
}
export default UseAuth




/* 
import React, { useEffect } from 'react'
import { Typography, Box, TextField, Button, useTheme } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { mainLogo } from "../../assets"
import Image from 'next/image'
import Link from 'next/link'
import * as yup from "yup";
import { Form, Formik, FormikHelpers } from "formik";
import { IResetPasswordStep1Form } from '../../interfaces/IResetPasswordStep1Form';
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router'


const ForgotPassword: React.FC = (): JSX.Element => {
    const router = useRouter()

    const theme = useTheme()

    const { loading, getResetCodeByEmail } = useAuth()

    // const { enqueueSnackbar } = useSnackbar();
    const initialValues: IResetPasswordStep1Form = {
        email: "",
    };

    const validationSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Required"),
    });

    const onSubmit = async (values: IResetPasswordStep1Form, actions: FormikHelpers<IResetPasswordStep1Form>) => {
        const response = await getResetCodeByEmail(values.email)
        if (response) {
            router.push('/change-password')
        }
    };

    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f8f8f8",
            padding: "40px 0",
        }} >
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box mb={1}>
                    <Image
                        src={mainLogo}
                        alt="Picture of the author"
                        width={200}
                        height={40}
                    />
                </Box>
                <Box sx={{
                    padding: '60px 100px 20px',
                    borderRadius: '20px',
                    margin: '20px',
                    border: '1px solid #e6e6e6',
                    background: '#fff',
                    transition: '0.3s all ease-in-out',
                    [theme.breakpoints.down('md')]: {
                        padding: '40px 50px 20px'
                    },
                    [theme.breakpoints.down('md')]: {
                        padding: '30px 25px 20px'
                    }
                }}>
                    <Box sx={{
                        maxWidth: '400px',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}>
                        <Typography
                            fontSize="24px"
                            color="secondary.main"
                            mb={1}
                            fontWeight="500" >
                            Verify Email
                        </Typography>
                        <Typography fontSize="14px" mb={5} color="secondary.dark" fontWeight="400">
                            Securely sign in to manage your account and access exclusive features
                        </Typography>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {(formik) => {
                                return (
                                    <Form>
                                        <TextField
                                            label="Email"
                                            size="medium"
                                            name="email"
                                            type="text"
                                            placeholder="Email"
                                            sx={{
                                                border: "1px solid #FFF",
                                                width: "100%",
                                                input: {
                                                    color: "secondary.main"
                                                },
                                                "label": { color: "rgba(0,0,0,0.3)" },
                                                "& fieldset": {
                                                    borderRadius: "14px",
                                                },
                                            }}
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                        />

                                        <Button
                                            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : ""}
                                            disabled={loading}
                                            variant="contained"
                                            type="submit"
                                            fullWidth

                                            sx={{
                                                borderRadius: "12px",
                                                borderBottom: "2px solid #0B223C",
                                                mb: "40px",
                                                mt: "20px",
                                                background: "primary.main"
                                            }}>
                                            {loading ? 'Loading...' : 'Submit'}
                                        </Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                        <Box mt={2} display="flex">
                            <Typography textAlign="center" >
                                You have already account?
                            </Typography>
                            <Link href="/login"
                                style={{
                                    cursor: "pointer",
                                    color: '#3069EB',
                                    marginLeft: "10px",
                                    textDecoration: 'none'
                                }} >
                                Log in
                            </Link>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ForgotPassword
*/
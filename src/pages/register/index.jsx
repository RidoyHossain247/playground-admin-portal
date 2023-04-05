import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material"
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom'
import api from '../../service'
import jwtDecode from 'jwt-decode'
import { useStoreActions } from 'easy-peasy'

const Register = () => {

    const authAction = useStoreActions((action) => action.auth)

    const navigate = useNavigate()

    const initValues = {
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
    }
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        contact: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().when('password', (password, field) =>
            password ? field.required().oneOf([Yup.ref('password')]) : field
        )
    });


    const handleSubmit = async (values, actions) => {
        try {
            const res = await api.post("/auth/register", values)
            const token = res.data.data
            const user = jwtDecode(token)
            authAction.login({
                token,
                user
            })
            actions.resetForm()
            navigate("/")
        } catch (error) {
            console("error", error)
        }
    }
    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f8f8f8",
        }}>
            <Box sx={{ maxWidth: "400px", background: "white", p: 5, borderRadius: 3 }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "600", textAlign: "center", mb: 1, color: "#1976d2" }}>Register</Typography>
                <Formik
                    initialValues={initValues}
                    onSubmit={handleSubmit}
                    validationSchema={SignupSchema}
                >
                    {(formik) => (
                        <Form>
                            <TextField
                                fullWidth
                                type="text"
                                size="small"
                                id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                                sx={{ my: 1 }}
                                name='firstName'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            />

                            <TextField
                                fullWidth
                                type="text"
                                size="small"
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                                sx={{ my: 1 }}
                                name='lastName'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            />
                            <TextField
                                fullWidth
                                type="email"
                                size="small"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                sx={{ my: 1 }}
                                name='email'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.email && formik.errors.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                            />
                            <TextField
                                fullWidth
                                size="small"
                                type="text"
                                id="outlined-basic"
                                label="contact"
                                variant="outlined"
                                sx={{ my: 1 }}
                                name='contact'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.contact && formik.errors.contact}
                                error={formik.touched.contact && Boolean(formik.errors.contact)}
                            />
                            <TextField
                                fullWidth
                                size="small"
                                type="password"
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                sx={{ my: 1 }}
                                name='password'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.password && formik.errors.password}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                            />
                            <TextField
                                fullWidth
                                size="small"
                                type="password"
                                id="outlined-basic"
                                label="Confirm Password"
                                variant="outlined"
                                sx={{ my: 1 }}
                                name='confirmPassword'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}

                            />
                            <Button fullWidth variant="contained" sx={{ mt: 3 }} type='submit'>{formik.isSubmitting ? 'Loading...' : 'Create Account'}</Button>
                        </Form>
                    )}
                </Formik>
                <Box mt={2} display="flex">
                    <Typography textAlign="center" >
                        Already have an account?
                    </Typography>
                    <Link to="/"
                        style={{
                            cursor: "pointer",
                            color: '#3069EB',
                            marginLeft: "10px",
                            textDecoration: 'none'
                        }} >
                        Sign in
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Register

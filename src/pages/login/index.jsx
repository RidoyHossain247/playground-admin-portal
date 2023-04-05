import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material"
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom'
import api from '../../service'
import jwtDecode from 'jwt-decode'
import { useStoreActions } from 'easy-peasy'


const Login = () => {

    const authAction = useStoreActions((action) => action.auth)

    const navigate = useNavigate()

    const initValues = {
        email: '',
        password: ''
    }
    const handleSubmit = async (values, actions) => {
        try {
            const res = await api.post("/auth/login", values)
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
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
    });
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
                <Typography sx={{ fontSize: "25px", fontWeight: "600", textAlign: "center", mb: 1, color: "#1976d2" }}>Login</Typography>
                <Formik
                    initialValues={initValues}
                    onSubmit={handleSubmit}
                    validationSchema={SignupSchema}
                >
                    {(formik) => (
                        <Form>
                           
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
                                type="password"
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                sx={{ my: 1 }}
                                name='password'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                helperText={formik.touched.password && formik.errors.password}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                            />
                            <Button fullWidth variant="contained" sx={{ mt: 3 }} type='submit'>{formik.isSubmitting ? 'Loading...' : 'Login'}</Button>
                        </Form>
                    )}
                </Formik>
                <Box mt={2} display="flex">
                    <Typography textAlign="center" >
                        Don&apos;t have an account?
                    </Typography>
                    <Link to="/register"
                        style={{
                            cursor: "pointer",
                            color: '#3069EB',
                            marginLeft: "10px",
                            textDecoration: 'none'

                        }} >
                        Register
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Login

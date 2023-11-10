
import { Box, Button, Divider, TextField, Typography, } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { userValidation } from "../../validationError";

const AddUser = () => {
    const { handelRegistration } = useAuth()

    const navigate = useNavigate()





    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        contact: ""
    }

    const { values, errors, touched, handleChange, handleSubmit, handleBlur, dirty, isValid, resetForm } = useFormik({
        initialValues,
        validationSchema: userValidation,
        onSubmit: async (values, action) => {
            console.log("value", values)
            const res = await handelRegistration("/users", values)
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
                        placeholder="Enter Email"
                        type={'email'}
                        sx={{ my: 2, mr: 2 }}
                        variant="outlined"
                        name="email"
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
                        sx={{ my: 2 }}
                        variant="outlined"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                        onBlur={handleBlur}
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
                    disabled={!dirty || !isValid}
                >
                    Submit
                </Button>
                <Box textAlign="end" mt={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        onClick={resetForm}
                    >Reset</Button>
                </Box>
            </form>
        </Box>
    )
}


export default AddUser
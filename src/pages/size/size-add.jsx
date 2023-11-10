
import { Box, Button, TextField, Typography } from "@mui/material"
import { Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useData from '../../hooks/useData'
import { sizeValidation } from "../../validationError"

const initValues = {
    name: '',

}

const SizeAdd = () => {
    const { createData, loading } = useData('/sizes')
    const navigate = useNavigate()
    const handleSubmit = async (values, actions) => {
        console.log('values=', values)
        const response = await createData(values)
        if (response) {
            actions.resetForm()
            navigate('/size/list')
        }
    }

    return (
        <>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Size Add</Typography>
            </Box>

            <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={sizeValidation}>
                {(formik) => (
                    <Form>
                        <TextField
                            fullWidth
                            size="small"
                            id="outlined-basic"
                            label="Size Name"
                            variant="outlined"
                            sx={{ my: 1 }}
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.name && formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name && formik.errors.name}

                        />
                        <Box textAlign="end" mt={3}>
                            <Button sx={{ mr: 1 }} variant="outlined" type="button" onClick={formik.resetForm}>Reset</Button>
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={!formik.dirty || !formik.isValid}
                            >{formik.isSubmitting ? "Loading" : "Submit"}</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default SizeAdd





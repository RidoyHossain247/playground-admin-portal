import React from 'react'
import { useParams } from "react-router-dom"
import { Box, Button, TextField, Typography } from "@mui/material"
import { Formik, Form } from 'formik'
import useData from "../../hooks/useData"
import { useNavigate } from 'react-router-dom'

const SizeEdit = () => {
    const navigate=useNavigate()
    const { updateData, getDetail } = useData(`/sizes`)
    const urlId = useParams()
    const data = getDetail(`/sizes/${urlId.id}`)

    const initValues = {
        name: data ? data.name : "",
    }

    const handleSubmit = async (values, actions) => {
      
        const response = await updateData(values, `/sizes/${urlId.id}`)
        if (response) {
            actions.resetForm()
            navigate('/size/size-list')
        }
    }

    return (
        <Box>
            <Box textAlign="center" mb={2}>
                <Typography fontSize={25} component="h3" color="primary">Size Add</Typography>
            </Box>

            <Formik
                initialValues={initValues}
                onSubmit={handleSubmit}>
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
                        />

                        <Box textAlign="end" mt={3}>
                            <Button variant="contained" type='submit'>Update</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box >
    )
}

export default SizeEdit

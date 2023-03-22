
import { Box, TextField, Button, Typography, Link, Divider, } from "@mui/material"


const SignUpPage = () => {

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
                SingUp
            </Typography>
            <Divider sx={{ width: "100%", mb: 3 }} />
            <Box display={'flex'}>
                <TextField
                    fullWidth
                    placeholder="Enter First Name"
                    type={'text'}
                    sx={{ my: 2, mr: 2 }}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    placeholder="Enter Last Name"
                    type={'text'}
                    sx={{ my: 2 }}
                    variant="outlined"
                />
            </Box>
            <Box display={'flex'}>
                <TextField
                    fullWidth
                    placeholder="Enter Email"
                    type={'email'}
                    sx={{ my: 2, mr: 2 }}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    placeholder="Enter Password"
                    type={'password'}

                    sx={{ my: 2 }}
                    variant="outlined" />
            </Box>
            <Box display={'flex'}>
                <TextField
                    fullWidth
                    placeholder="Enter ConfirmPassword"
                    type={'password'}

                    sx={{ my: 2, mr: 2 }}
                    variant="outlined" />
                <TextField
                    fullWidth
                    placeholder="Contact Number"
                    type={'number'}
                    sx={{ my: 2 }}
                    variant="outlined"
                />
            </Box>

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

export default SignUpPage
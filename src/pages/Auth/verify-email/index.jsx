
import { Box, TextField, Button, Typography, Link, Divider, } from "@mui/material"


const VerifyEmailPage = () => {

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
            <TextField
                fullWidth
                placeholder="Enter Email"
                type={'email'}
                sx={{ my: 2 }}
                variant="outlined"
            />
            <TextField
                fullWidth
                placeholder="Enter Code"
                type={'number'}

                sx={{ my: 2 }}
                variant="outlined" />
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

                Rest Password
            </Button>
        </Box>
    )
}

export default VerifyEmailPage
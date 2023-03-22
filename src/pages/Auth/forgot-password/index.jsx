
import { Box, Button, TextField, Typography } from "@mui/material"

const ForgotPasswordPage = () => {

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
                sx={{ mb: 1, fontWeight: 'bold', fontSize: 14 }}
            >
                Enter your user account's verified email address and will sen you a password reset link.
            </Typography>
            <TextField
                fullWidth
                placeholder="Enter Email"
                type={'email'}
                sx={{ my: 2 }}
                variant="outlined"
            />
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
                Send
            </Button>
        </Box>
    )
}

export default ForgotPasswordPage
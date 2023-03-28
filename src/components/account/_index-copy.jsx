import { Divider, Grid, Input, Typography, TextareaAutosize, Button, } from "@mui/material"
import { Box, } from "@mui/system"
import youserImage from "../../assets/Images/FB_IMG_1651283972600.jpg"





const Account = () => {
    return (
        <>
            <Grid container spacing={2} sx={{boxShadow:'1px 2px 10px rgba(0,0,0,0.3)', padding:'10px', borderRadius:'10px'}}>
                <Grid item xs={3} >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '50%', height: 'atuo', borderRadius: "100px", }} src={youserImage} />
                    </Box>
                    <Divider />
                    <Box sx={{ padding: '15px 20px', }}>
                        <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>Youser name</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ padding: '15px 20px' }}>
                        <Typography>Account</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ padding: '15px 20px' }}>
                        <Typography>Password</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ padding: '15px 20px' }}>
                        <Typography>Privacy & Policy</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ padding: '15px 20px' }}>
                        <Typography>Appilication</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ padding: '15px 20px' }}>
                        <Typography>Notification</Typography>
                    </Box>
                    <Divider />
                </Grid>
                <Grid item xs={9} >
                    <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>Account Seting</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>first Name</Typography>
                                <Input fullWidth sx={{ border: '1px solid black', borderRadius: '5px', padding: '0 10px' }} placeholder="First Name">djfaksdjfks</Input>
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Email</Typography>
                                <Input fullWidth sx={{ border: '1px solid black', borderRadius: '5px', padding: '0 10px' }} placeholder="Email">djfaksdjfks</Input>
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Company</Typography>
                                <Input fullWidth sx={{ border: '1px solid black', borderRadius: '5px', padding: '0 10px' }} placeholder="Company">djfaksdjfks</Input>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Last Name</Typography>
                                <Input fullWidth sx={{ border: '1px solid black', borderRadius: '5px', padding: '0 10px' }} placeholder="Last Name">djfaksdjfks</Input>
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Phone</Typography>
                                <Input fullWidth sx={{ border: '1px solid black', borderRadius: '5px', padding: '0 10px' }} placeholder="Phone">djfaksdjfks</Input>
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Location</Typography>
                                <Input fullWidth sx={{ border: '1px solid black', borderRadius: '5px', padding: '0 10px' }} placeholder="Location">djfaksdjfks</Input>
                            </Box>
                            
                        </Grid>
                      
                    </Grid>
                    <Button variant="text">Update</Button>
                    <Button variant="contained">Cancel</Button>
                </Grid>
            </Grid>
        </>
    )
}
export default Account

import { useStoreState } from 'easy-peasy';
import { Divider, Grid, Typography, Button, } from "@mui/material"

import { Box, } from "@mui/system"
import youserImage from "../../assets/Images/FB_IMG_1651283972600.jpg"





const Account = () => {
const AuthAvatarFirsrName= useStoreState(state=>state.auth.user.firstName);
const AuthAvatarEmail= useStoreState(state=>state.auth.user.email)
const AuthAvatarlastName= useStoreState(state=>state.auth.user.lastName)
const AuthAvatarcontact= useStoreState(state=>state.auth.user.contact)
    return (
        <>
            <Grid container spacing={2} sx={{ boxShadow: '1px 2px 10px rgba(0,0,0,0.3)', padding: '10px', borderRadius: '10px' }}>
                <Grid item xs={3} >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '50%', height: 'atuo', borderRadius: "100px", }} alt={youserImage} src={youserImage} />
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
                                <Typography>{AuthAvatarFirsrName}</Typography>
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Email</Typography>
                                <Typography>{AuthAvatarEmail}</Typography>
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Company</Typography>
                                <Typography>Betnik Techonology</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Last Name</Typography>
                                <Typography>{AuthAvatarlastName}</Typography>
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Phone</Typography>
                                <Typography sx={{color:(AuthAvatarcontact ? "balck" : "#dfdfdf")}} >{AuthAvatarcontact ? AuthAvatarcontact : "No Number"}</Typography>
                                {/* <Typography sx={{color:(AuthAvatarcontact && "balck" || "#dfdfdf")}} >{AuthAvatarcontact ? AuthAvatarcontact : "No Number"}</Typography> */}
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Location</Typography>
                                <Typography>Section:12, Block: C, Road: 9, House: 16, Mirpur</Typography>
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
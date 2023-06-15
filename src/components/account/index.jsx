
import { Button, Divider, Grid, Typography, } from "@mui/material";
import { Box, } from "@mui/system";
import { useState } from "react";
import youserImage from "../../assets/Images/FB_IMG_1651283972600.jpg";
import useAuth from '../../hooks/useAuth';
import useData from '../../hooks/useData';
import AcountUpdateModal from "./AcountUpdateModal";


const Account = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [userId, setUserId] = useState('')
    const { authUser } = useAuth()
    const { getDetail } = useData(`/users`)
    const userDetail = getDetail(`/users/${authUser._id}`)

    const handelChange = (userId) => {
        setIsOpen(true)
        setUserId(userId)
    }
    if (!userDetail) {
        return <Grid container spacing={2} sx={{ boxShadow: '1px 2px 10px rgba(0,0,0,0.3)', padding: '10px', borderRadius: '10px' }}>
            <Grid item xs={3} >
                <h1>No user found</h1>
            </Grid>
        </Grid>
    }

    return (
        <>
            <Grid container spacing={2} sx={{ boxShadow: '1px 2px 10px rgba(0,0,0,0.3)', padding: '10px', borderRadius: '10px' }}>
                <Grid item xs={3} >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '50%', height: 'atuo', borderRadius: "100px", }} alt={youserImage} src={youserImage} />
                    </Box>
                    <Divider />
                    <Box sx={{ padding: '15px 20px', }}>
                        <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>{userDetail.firstName} {userDetail.lastName}</Typography>
                    </Box>
                    <Divider />
                    <Divider />
                    <Box sx={{ padding: '15px 20px' }}>
                        <Typography>Change Password</Typography>
                    </Box>
                    <Divider />
                </Grid>
                <Grid item xs={9} >
                    <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>Profile Info</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>First Name</Typography>
                                <Typography>{userDetail.firstName}</Typography>
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Email</Typography>
                                <Typography>{userDetail.email}</Typography>
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Company</Typography>
                                <Typography>Betnik Techonology</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Last Name</Typography>
                                <Typography>{userDetail.lastName}</Typography>
                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Phone</Typography>
                                <Typography sx={{ color: (userDetail.contact ? "balck" : "#dfdfdf") }} >{userDetail.contact ? userDetail.AuthAvatarcontact : "No Number"}</Typography>

                            </Box>
                            <Box sx={{ padding: '10px 0' }}>
                                <Typography>Location</Typography>
                                <Typography>{userDetail.location}</Typography>
                            </Box>

                        </Grid>

                    </Grid>
                    <Button variant="text" onClick={() => handelChange(authUser._id)}>Edit</Button>
                </Grid>
                {isOpen && <AcountUpdateModal open={isOpen} setOpen={setIsOpen} userId={userId} />}
            </Grid>
        </>
    )
}
export default Account

import { Divider, Box, Typography, TextField, Grid } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar.jsx';
import SearchIcon from '@mui/icons-material/Search';
import YouserImg from "../../assets/FB_IMG_1628668855520.jpg"


const Layout = (props) => {
  console.log(props)
  return (
    <div>
      <Grid container>
        <Grid item lg={2} bgcolor='#178edc' sx={{ height: '100vh', "@media (max-width:600px)": { display: '' } }}>
          <Sidebar />
        </Grid>
        <Grid item lg={10} sm={6} xs={6} sx={{ paddingLeft: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.3)', }}>
          <Box sx={{ boxShadow: '0 0 10px rgba(0,0,0,0.3)', padding: '10px 10px' }}>
            <Grid container>
              <Grid item lg={6} sm={6} xs={6} sx={{ display: 'flex', alignItems: 'center', "@media (max-width:600px)": { marginBottom: '10px', } }}>
                <TextField variant="filled" sx={{ border: 'none', height:'40px', width:'300px',borderRadius:'5px',overflow:'hidden' }} id="outlined-basic" label="Outlined" />
                <SearchIcon sx={{ bgcolor: "#178edc", borderBottom: "none", padding: '5px', fontSize: '30px', borderRadius: '0 5px 5px 0', cursor: 'pointer', color: "white" }} />
              </Grid>
              <Grid item lg={6} sx={{ justifyContent: 'end', alignItems: 'center', display: 'flex', }}>

                <Box sx={{ position: 'relative' }}>
                  <SearchIcon sx={{ fontSize: "30px", color: '#c0b9b9' }} />
                  <Typography sx={{ position: "absolute", top: "0", right: "0", bgcolor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '9px', color: 'white', borderRadius: '5px', padding: "0 5px" }}>7</Typography>
                </Box>
                <Box sx={{ position: 'relative', margin: " 0 30px" }}>
                  <SearchIcon sx={{ fontSize: "30px", color: '#c0b9b9' }} />
                  <Typography sx={{ position: "absolute", top: "0", right: "0", bgcolor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '9px', color: 'white', borderRadius: '5px', padding: "0 5px" }}>7</Typography>
                </Box>
                <Divider orientation="vertical" sx={{ margin: "0 20px" }} />

                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  <Typography sx={{ color: '#908f8f' }}>
                    Md. Sohag Hossain
                  </Typography>
                  <img style={{ width: '30px', height: "30px", borderRadius: "50px", marginLeft: '10px' }} alt={" "} src={YouserImg} />
                </Box>
              </Grid>
            </Grid>
          </Box>
          {props.children}


        </Grid>

      </Grid>


    </div>
  )
}

export default Layout

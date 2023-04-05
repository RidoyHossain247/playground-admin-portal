import { Box, Grid,AppBar,Toolbar } from '@mui/material'
import React from 'react'
import Header from './Header';
import { logo } from "../../assets"
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
const Layout = (props) => {
  return (
    <Grid container >
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <AppBar position="static" color="inherit" sx={{ bgcolor: "white", px: 2 }}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/" style={{}}>
                <img src={logo} alt="" />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Header />
            </Box>
          </Toolbar>
        </AppBar>
        <Box p={3}>
          {props.children}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Layout


import { Box, Grid } from '@mui/material';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = (props) => {
  return (
    <Grid container >
      <Sidebar />
      <Grid xs={10}>
        <Header />
        <Box p={3}>
          {props.children}
        </Box>
      </Grid>
    </Grid>

  )
}

export default Layout

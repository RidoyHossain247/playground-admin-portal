import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Header from './Header';
import { logo } from "../../assets"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Layout = (props) => {
  return (
    <Grid container >
      <Grid xs={2}>
        <AppBar position="static" color="inherit" sx={{ px: 2, height: "100vh" }}>
          <Typography sx={{ fontSize: 30, color: "#3069EB", fontWeight: 500, borderBottom: "1px solid rgba(0,0,0,0.2)", display: "block", lineHeight: "63px" }}>Dashboard</Typography>

          <Typography fontSize={18} py={2}> Navbar </Typography>
          <Box>
            <Accordion sx={{ boxShadow: 0 ,px:0,my:0}}>
              <AccordionSummary
              sx={{px:0,my:0}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>Category</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Add</Typography>
                <Typography>List</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </AppBar>
      </Grid>
      <Grid xs={10}>
        <AppBar position="static" color="inherit" sx={{ bgcolor: "white", px: 2 }}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <img src={logo} alt="" />
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

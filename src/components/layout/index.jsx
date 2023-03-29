
import { Box, Grid, Divider, Typography, TextField } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Header from './Header';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Accroding from '../accrodion';

const Layout = (props) => {
  return (
    <Grid container >
      <Grid xs={2}>
        <AppBar position="static" color="inherit" sx={{ height: "100vh" }}>
         
          <Box  bgcolor='#178edc' sx={{ height: '100vh', "@media (max-width:600px)": { display: '' } }}>

            <Box sx={{ padding: '10px', color: 'white' }}>
              <Box sx={{ display: "flex", alignItems: 'center' }}>
                <InsertEmoticonIcon sx={{ color: 'white', fontSize: '50px' }} />
                <Typography sx={{ fontSize: '25px', fontWeight: '600', paddingLeft: '10px' }}>
                  Admin nmae
                </Typography>
              </Box>
              <Divider sx={{ bgcolor: 'white', margin: '20px 0' }} />

              <Box sx={{ display: "flex", alignItems: 'center' }}>
                <InsertEmoticonIcon sx={{ color: 'white', fontSize: '23px' }} />
                <Typography sx={{ fontSize: '18px', fontWeight: '600', paddingLeft: '10px' }}>
                  Admin nmae
                </Typography>
              </Box>
              <Divider sx={{ bgcolor: 'white', margin: '20px 0' }} />

              <Box sx={{}}>
                <Accroding name="Category" add="Category Add" urlAdd="/add" urlList="/list" list="Category List" />
                <Accroding name="Sub Category" add="Sub Category Add" list="Sub Category List" urlAdd="/subcategory-add" urlList="/subcategory-list" />
              </Box>
              <Divider sx={{ bgcolor: 'white', margin: '20px 0' }} />
              <Typography sx={{ fontSize: '18px', fontWeight: '600', paddingLeft: '10px' }}>
                Admin nmae
              </Typography>
              <Box sx={{}}>
                <Accroding name="Colors" add="Colors Add" list="Colors List" urlList="/color-list" urlAdd="/color-add" />
                <Accroding name="Size" add="Size Add" list="Size List" urlList="/size-list" urlAdd="/size-add" />
              </Box>
              <Divider sx={{ bgcolor: 'white', margin: '20px 0' }} />

              <Box sx={{ display: "flex", alignItems: 'center' }}>
                <InsertEmoticonIcon sx={{ color: 'white', fontSize: '23px' }} />
                <Typography sx={{ fontWeight: '600', paddingLeft: '10px' }}>
                  Charts
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: 'center', paddingTop: "20PX" }}>
                <InsertEmoticonIcon sx={{ color: 'white', fontSize: '23px' }} />
                <Typography sx={{ fontWeight: '600', paddingLeft: '10px' }}>
                  Charts
                </Typography>
              </Box>
              <Divider sx={{ bgcolor: 'white', margin: '20px 0' }} />
            </Box>
          </Box>
        </AppBar>
      </Grid>
      <Grid xs={10}>
        <AppBar position="static" color="inherit" sx={{ bgcolor: "white", px: 2 }}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <TextField variant="filled" sx={{ border: 'none', height: '40px', width: '300px', borderRadius: '5px', overflow: 'hidden' }} id="outlined-basic" label="Outlined" />
              <SearchIcon sx={{ bgcolor: "#178edc", borderBottom: "none", padding: '5px', fontSize: '30px', borderRadius: '0 5px 5px 0', cursor: 'pointer', color: "white" }} />
            </Box>
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                <SearchIcon sx={{ fontSize: "30px", color: '#c0b9b9' }} />
                <Typography sx={{ position: "absolute", top: "0", right: "0", bgcolor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '9px', color: 'white', borderRadius: '5px', padding: "0 5px" }}>7</Typography>
              </Box>
              <Box sx={{ position: 'relative', margin: " 0 30px" }}>
                <SearchIcon sx={{ fontSize: "30px", color: '#c0b9b9' }} />
                <Typography sx={{ position: "absolute", top: "0", right: "0", bgcolor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '9px', color: 'white', borderRadius: '5px', padding: "0 5px" }}>7</Typography>
              </Box>
              <Divider orientation="vertical" sx={{ margin: "0 20px" }} />
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

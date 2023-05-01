
import SearchIcon from '@mui/icons-material/Search';
import { Box, Divider, TextField, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import UserMenu from './UserMenu';


const Header = () => {
   return (
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
               <UserMenu />
            </Box>
         </Toolbar>
      </AppBar>
   )
}
export default Header
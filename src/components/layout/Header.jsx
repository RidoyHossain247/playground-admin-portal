
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField } from '@mui/material';
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
               <UserMenu />
            </Box>
         </Toolbar>
      </AppBar>
   )
}
export default Header
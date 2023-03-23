import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Button, Menu, MenuItem } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const { handelLogout } = useAuth()


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box>
      <Box display="flex" alignItems="center" sx={{ p: 0, cursor: "pointer" }} id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <Typography sx={{ fontSize: "16px", fontWeight: 700, mr: 1, color: "#3069EB" }}>Avatar</Typography>
        <Avatar src="/static/images/avatar/2.jpg" />
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handelLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}

export default Header

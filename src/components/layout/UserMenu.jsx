import { Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useData from '../../hooks/useData';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { handelLogout, authUser } = useAuth()
  const { getDetail } = useData(`/users`)
  const userDetail = getDetail(`/users/${authUser._id}`)
  const AuthAvatar = userDetail?.firstName

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handelMyAccount = () => {
    handleClose()
  }

  return (
    <Box>
      <Box display="flex" alignItems="center" sx={{ p: 0, cursor: "pointer" }} id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <Typography sx={{ fontSize: "16px", fontWeight: 700, mr: 1, color: "#3069EB" }}>{AuthAvatar}</Typography>
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
        <MenuItem onClick={handelMyAccount}><Link style={{ textDecoration: 'none', color: 'black' }} to="/account"> Manage My account</Link></MenuItem>
        <MenuItem onClick={handelLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}

export default UserMenu

import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Menu, MenuItem } from '@mui/material';
import { useStoreActions,useStoreState } from 'easy-peasy'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate=useNavigate()
  const authAction = useStoreActions((action) => action.auth)
  const authName = useStoreState((state) => state.auth.user.firstName)
  
  const logoutHandle=()=>{
    authAction.logout()
    navigate("/")
  }
  return (
    <Box>
      <Box display="flex" alignItems="center" sx={{ p: 0, cursor: "pointer" }} id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <Typography sx={{ fontSize: "16px", fontWeight: 700, mr: 1, color: "#3069EB" }}>{authName}</Typography>
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
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={logoutHandle}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}

export default Header

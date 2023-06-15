import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { AppBar, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Accroding from '../accrodion';
import menu from './menu.json';


const Sidebar = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState('')

  const { authUser } = useAuth()


  useEffect(() => {
    setPathname(location.pathname)
  }, [location.pathname]);


  return (
    <Grid xs={2}>
      <AppBar position="static" color="inherit" sx={{ height: "100vh" }}>

        <Box bgcolor='#cfb572' sx={{ height: '100vh', "@media (max-width:600px)": { display: '' } }}>

          <Box sx={{ padding: '10px', color: 'white' }}>
            <Box sx={{ display: "flex", alignItems: 'center' }}>
              <InsertEmoticonIcon sx={{ color: 'white', fontSize: '50px' }} />
              <Typography sx={{ fontSize: '25px', fontWeight: '600', paddingLeft: '10px' }}>
                {authUser.firstName}
              </Typography>
            </Box>
            <Divider sx={{ bgcolor: 'white', margin: '20px 0' }} />
            <Box sx={{}}>
              {menu.map(element => <Accroding key={element.id} {...element} pathname={pathname} handleActiveMenu={setPathname} />)}
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Grid>
  )
}

export default Sidebar

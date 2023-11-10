import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { AppBar, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
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

        <Box bgcolor="#22253d" sx={{ padding: '10px', color: 'white', height: '100vh', "@media (max-width:600px)": { display: '' } }}>
          <Box>
            <Link
              to={"/"}
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                textDecoration: "none",
                color: "#fff"
              }}
            >
              <InsertEmoticonIcon sx={{ color: 'white', fontSize: '50px' }} />
              <Typography sx={{ fontSize: '25px', fontWeight: '600', paddingLeft: '10px' }}>
                {authUser.firstName}
              </Typography>
            </Link>
          </Box>

          <Divider sx={{ bgcolor: 'white', margin: '20px 0' }} />
          <Box>
            {menu.map(item =>
              <Link
                key={item.id}
                style={{
                  color: pathname === item.url ? '#000' : '#fff',
                  textDecoration: "none",
                  display: '',
                  lineHeight: "40px",
                }} to={item.url}
              >
                <Box
                  sx={{
                    background: pathname === item.url ? '#ffff' : '',
                    borderRadius: 2,
                    paddingLeft: "20px"

                  }}
                >
                  {item.name}
                </Box>
              </Link>

            )}
          </Box>
        </Box>
      </AppBar>
    </Grid>
  )
}

export default Sidebar

import { Divider, Typography, } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Accroding from '../accrodion';


const Sidebar = () => {


  return (
    <>
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
          <Accroding Category="Category 1" CategoryAdd="Category Add" CategoryList="Category List" />
          <Accroding Category="Category 1" CategoryAdd="Category Add" CategoryList="Category List" />
        </Box>
        <Divider sx={{ bgcolor: 'white', margin: '20px 0' }} />
        <Typography sx={{ fontSize: '18px', fontWeight: '600', paddingLeft: '10px' }}>
          Admin nmae
        </Typography>
        <Box sx={{}}>
          <Accroding Category="Category 1" CategoryAdd="Category Add" CategoryList="Category List" />
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
    </>
  )
}

export default Sidebar

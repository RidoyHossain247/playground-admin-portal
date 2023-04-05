import React from 'react'
import { Box, Typography, AppBar } from '@mui/material'
import CustomAccordion from '../accordion/CustomAccordion';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <AppBar position="static" color="inherit" sx={{ px: 2, height: "100vh" }}>
      <Typography sx={{
        fontSize: 25,
        fontWeight: 500,
        borderBottom: "1px solid rgba(0,0,0,0.2)",
        display: "block",
        lineHeight: "63px"
      }}>
       <Link to="/" style={{textDecoration:"none", color: "#3069EB",display:"block"}}> Dashboard</Link>
      </Typography>
      <Typography fontSize={18} py={2}> Navbar </Typography>
      <Box>
        <CustomAccordion navName="Category" addUrl="/categories/categories-add" listUrl="/categories/categories-list" />
        <CustomAccordion navName="Sub Category" addUrl="/sub-categories-add" listUrl="/sub-categories-list" />
        <CustomAccordion navName="Colors" addUrl="/color-add" listUrl="/color-list" />
        <CustomAccordion navName="Size" addUrl="/size/size-add" listUrl="/size/size-list" />
      </Box>
    </AppBar>
  )
}
export default Sidebar


import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';
import { Link } from 'react-router-dom';



const Accroding = ({ id, name, submenu, pathname, handleActiveMenu }) => {

  /**
   /
   /caregories/list
   categories


  arr = ['']
  arr = ['', 'category', 'list']
  arr = ['category']
  
  
  */

  const isMenuActive = () => {
    const arr = pathname.split('/')
    if (arr.length === 1 && pathname === id) {
      return true;
    } else if (arr.length > 1 && arr[1] === id) {
      return true;
    }
    return false;
  }


  return (
    <Accordion
      expanded={isMenuActive()}
      sx={{ width: '100%  !important', background: '#cfb572', color: 'white' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        expanded={true}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ margin: 0, background: '#cfa434', minHeight: "20px" }}
      >
        <Box sx={{ display: 'flex', alignItems: "center", width: "100%" }} onClick={() => isMenuActive() ? null : handleActiveMenu(id)}>
          <BrightnessHighIcon sx={{ pr: '5px', fontSize: '17px' }} />
          <Typography sx={{ mr: '0 auto', fontWeight: '600' }}>{name}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ marginLeft: '10px' }}>
        {submenu.map(element =>
          <Box
            key={element.url}
            sx={{
              background: pathname === element.url ? '#dbbb67' : '',
              borderRadius: 2,
            }}>
            <Link style={{
              color: 'white',
              textDecoration: "none",
              display: 'block',
              lineHeight: "40px",
              paddingLeft: "15px"
            }} to={element.url}>{element.name}</Link>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  )
}
export default Accroding
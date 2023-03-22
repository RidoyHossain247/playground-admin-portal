
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import {Typography,Divider,Box } from '@mui/material'

const Accroding = (props) => {
    return (
        <>
            <Accordion  sx={{width:'100%  !important', background:'#178edc', color:'white'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
               <Box sx={{display:'flex', alignItems:"center"}}>
               <BrightnessHighIcon sx={{pr:'5px', fontSize: '17px'}}/>
                <Typography sx={{mr:'0 auto'}}>{props.Category}</Typography>
               </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {props.CategoryAdd} 
                </Typography>
                <Divider sx={{paddingBottom:'4px'}}/>
                <Typography>
                 { props.CategoryList}
                </Typography>
              </AccordionDetails>
            </Accordion>
        </>
    )
}
export default Accroding


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import * as React from 'react';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const AccordionTask = () => {
   const [checked, setChecked] = React.useState(false);
   const [expanded, setExnpanded] = React.useState(false);

   const handleChange = (event) => {
      setChecked(event.target.checked);
      setExnpanded((prev) => !prev)
   }
   // const accordionHandel = () => {
   //    setExnpanded()
   // }
   return (
      <Box>
         <Box>
            <Switch
               checked={checked}
               onChange={handleChange}
               inputProps={{ 'aria-label': 'controlled' }}
            />
         </Box>
         <Accordion defaultExpanded={true} /* expanded={checked} */ >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
            </AccordionDetails>
         </Accordion >
         <Accordion expanded={checked} >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel2a-content"
               id="panel2a-header"
            >
               <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion onClick={(e) => setExnpanded(true)} expanded={checked}  >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel3a-content"
               id="panel2a-header"
            >
               <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </Box>
   );
}

export default AccordionTask
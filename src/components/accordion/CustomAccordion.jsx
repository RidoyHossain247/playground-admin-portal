import React from 'react'
import { Link } from "react-router-dom"
import FolderIcon from '@mui/icons-material/Folder';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CustomAccordion = ({ addUrl, listUrl, navName }) => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper',p:0}}
      component="nav"
      aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClick} sx={{ py: 1, px: 0 }}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={navName} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{ p: 0 }}>
        <List component="div" disablePadding>
          <Link to={addUrl} style={{ color: "black", textDecoration: "none" }}>
            <ListItemButton sx={{ p: 0, pl: 2 }}>
              <ListItemIcon>
                <NoteAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItemButton>
          </Link>
          <Link to={listUrl} style={{ color: "black", textDecoration: "none" }}>
            <ListItemButton sx={{ p: 0, pl: 2 }}>
              <ListItemIcon>
                <FormatListNumberedIcon />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  )
}

export default CustomAccordion

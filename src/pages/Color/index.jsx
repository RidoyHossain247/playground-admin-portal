import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button } from "@mui/material"
import { useState } from "react"
import ColorAdd from "./color-add"
import UpdateColor from "./color-edit"
import ColorList from "./color-list"
const Color = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [editItems, setEditItems] = useState({});

   const editHandler = (item = {}) => {
      setIsOpen(!isOpen)
      setEditItems(item)
   }

   return (
      <Box>
         <Box>

            {Object.keys(editItems).length !== 0 ?
               <UpdateColor editItems={editItems} editHandler={editHandler} /> :
               isOpen && <ColorAdd editHandler={editHandler} />
            }

         </Box>
         <Box>
            <Box marginTop={3} textAlign="end">
               <Button
                  variant="contained"
                  onClick={() => editHandler()}
               >{Object.keys(editItems).length !== 0 || isOpen ? <CloseIcon /> : <AddIcon />}</Button>
            </Box>
            <ColorList editHandler={editHandler} />
         </Box>
      </Box>
   )
}

export default Color
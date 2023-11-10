import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import swal from 'sweetalert';
import useData from '../../hooks/useData';

export default function EditStatus({ orderId, status }) {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const { updateData } = useData(`/orders`)


   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleChange = async (value) => {
      console.log('value', value)
      const result = await updateData({}, `/orders/changeStatus/${orderId}/${value}`)
      console.log('result=', result)
      if (result) handleClose()
   }

   return (
      <div>
         <MoreVertIcon
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
         />
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            {status === 1 && <MenuItem onClick={() => handleChange(2)}>Processing</MenuItem>}
            {status === 2 && <MenuItem onClick={() => handleChange(3)}>Pickup</MenuItem>}
            {status === 3 && <MenuItem onClick={() => handleChange(4)}>Deliverd</MenuItem>}
            {status < 4 && <MenuItem onClick={() => {
               swal({
                  title: "Are you sure?",
                  text: "You want to cancle this order items",
                  icon: "warning",
                  buttons: ["Cancel", "Yes"],
                  dangerMode: true,
               })
                  .then((willDelete) => {
                     if (willDelete) {
                        handleChange(5)
                        swal("Order items has been Cancled!", {
                           icon: "success",
                        });
                     }
                  });
            }}>Cancle</MenuItem>}
         </Menu>
      </div>
   );
}

// handleChange(5)
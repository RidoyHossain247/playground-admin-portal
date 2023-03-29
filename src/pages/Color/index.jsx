
import { Box } from '@mui/material';
import CreateColor from './create-color';
import ColorList from './list-color';


const Color = () => {
    return (
        <Box>
            <CreateColor />
            <ColorList />
        </Box>
    )
}

export default Color;
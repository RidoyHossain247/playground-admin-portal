import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import DashboardCard from "../dashboard-card";
const Dashboard = () => {
    return (
        <>
            <Box sx={{ pt: '10px' }}>
                <Typography sx={{ fontSize: "30px" }}>
                    Dashboard
                </Typography>
                
                   <DashboardCard/>  
            </Box>
        </>
    )
}
export default Dashboard
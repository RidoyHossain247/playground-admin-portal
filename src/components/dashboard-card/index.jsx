
import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import BorderInnerIcon from '@mui/icons-material/BorderInner';

const DashboardCard = () => {
    return (
        <>
            <Box>
            <Grid container  sx={{pt:'20px'}}>
                <Grid item lg={3} md={4} sm={6} xs={12} sx={{ borderLeft: '5px solid #1976d2;', padding: '20px', borderRadius: "5px", boxShadow: '1px 1px 8px rgba(0,0,0,0.3)', marginRight: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Typography color='primary' sx={{ fontSize: '13px', fontWeight: '600' }}>
                                Title naem
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                                $40.20
                            </Typography>
                        </Box>
                        <Box>
                            <BorderInnerIcon color='primary' sx={{ fontSize: '35px' }} />
                        </Box>
                    </Box>
                </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default DashboardCard
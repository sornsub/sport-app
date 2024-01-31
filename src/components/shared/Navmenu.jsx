import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Navmenu() {
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 ,fontSize: '1.2rem'}}>Home</Typography>
        <Typography sx={{ minWidth: 100 ,fontSize: '1.2rem'}}>Exercise activity</Typography>
        <Typography sx={{ minWidth: 100 ,fontSize: '1.2rem'}}>History</Typography>
        <Typography sx={{ minWidth: 100 ,fontSize: '1.2rem'}}>Settings</Typography>
        
      </Box>
    </React.Fragment>
  );
}
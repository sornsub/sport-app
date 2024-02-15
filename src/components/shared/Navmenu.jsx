import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Navmenu() {
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <a href='/'><Typography sx={{ minWidth: 100 ,fontSize: '1.2rem'}}>Home</Typography></a>
        <a href='/exercise-activity/create-form'><Typography sx={{ minWidth: 100 ,fontSize: '1.2rem'}}>Exercise activity</Typography></a>
        <a href='/history'><Typography sx={{ minWidth: 100 ,fontSize: '1.2rem'}}>History</Typography></a>
        <a href=''><Typography sx={{ minWidth: 100 ,fontSize: '1.2rem'}}>Settings</Typography></a>
        
      </Box>
    </React.Fragment>
  );
}
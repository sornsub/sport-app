import React, { useState, useEffect } from 'react'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TimerIcon from '@mui/icons-material/Timer';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DashboardAPI from '../../api/services/dashboard';

import { 
  ThemeProvider,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"

import { theme } from "./../../theme"


const CardSummary = ({selectedRange, userId, reload}) => {

  const [summaryData, setSummaryData] = useState({});
  
  useEffect(() => {
    getDataByUserId();
  }, [reload]);

  //call api
  const getDataByUserId  = async () => {
    const response = await DashboardAPI.getsummaryCardByUserId(userId, selectedRange)
    if (response) {
      setSummaryData(response);
    }
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      {/* TODO: change to justify-between for responsive lg*/}
    <div className="flex content-center items-center justify-center p-6 rounded-main m-5 bg-pink-light w-10/12">
        <CardContent sx={{color: 'primary.main'}}>
          <Typography component="div" variant="p" sx={{color: 'black'}}>
          <LocalFireDepartmentIcon sx={{color: 'orange', mr: 1}} />
            Calories
          </Typography>
          <p className="text-lg mb-3">
              {/* TODO: Format accounting number */}
            {`${summaryData.totalCalories} Kcal`}
          </p>
          <Typography component="div" variant="p" sx={{color: 'black'}}>
          <TimerIcon sx={{mr: 1}} />
            Time
          </Typography>
          <p className="text-lg mb-3">
            {`${summaryData.totalHours} hour ${summaryData.totalMinutes} min`}
          </p>
          <Typography component="div" variant="p" sx={{color: 'black'}}>
            <DirectionsRunIcon sx={{color: 'primary.main', mr: 1}} />
            Distance
          </Typography>
          <p className="text-lg">
            {`${summaryData.totalDistance} km`}
          </p>
        </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/images/dashboard-card.png"
        alt="The strong women doing workout"
      />
      </div>
      </ThemeProvider>
    </>

    
  )
}

export default CardSummary
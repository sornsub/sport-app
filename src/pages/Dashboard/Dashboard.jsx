import React, { useState } from 'react'
import DonutChart from '../../components/Charts/DonutChart';
import LineChart from '../../components/Charts/LineChart';
import CardSummary from '../../components/CardSummary/CardSummary';

import { 
  Grid,
  Box
} from '@mui/material';


const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState("today");
  const [reload, setReload] = useState([false]);

  const userId = localStorage.getItem("userId");
  
  const handleSelect = (valueSelectd) => {
    setSelectedRange(valueSelectd)
    setReload(!reload)
  }
  return (
    <>
    <div className="ml-5 mb-5">
       <h1 className="text-lg font-semibold mr-5 inline w-fit">Statistics</h1> 
        <select className="outline-0 w-fit p-2.5 text-grey text-sm" onChange={(e) => handleSelect(e.target.value)}>
          <option value="today">Today</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
    </div>
    <Grid sx={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)'}}>
      <CardSummary selectedRange={selectedRange} userId={userId} reload={reload}/>
      <DonutChart selectedRange={selectedRange} userId={userId} reload={reload}/>
    </Grid>
    <Box sx={{m: 10}}>
      <LineChart selectedRange={selectedRange} userId={userId} reload={reload}/>
    </Box>
    </>
  )
}

export default Dashboard
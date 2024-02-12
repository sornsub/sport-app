import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import API from '../../api/axios';

import 'apexcharts/dist/apexcharts.css';

const LineChart = ({selectedRange, userId, reload}) => {

  const [graphSummaryDatas, setGraphSummaryDatas] = useState([]);
  const [categoriesArray, setcategoriesArray] = useState([]);
  
  
  const dashboardRoute = "api/dashboard";

  useEffect(() => {
    getGraphSummaryByUserId();

     console.log(selectedRange)
    // if(selectedRange === 'today'){
    //   setcategoriesArray(current => [...current,"00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]);
    // }else if(selectedRange === 'weekly'){
      setcategoriesArray(current => [...current,"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
    // }else if(selectedRange === 'monthly'){
    //   setcategoriesArray(current => [...current,"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
    // }else if(selectedRange === 'yearly'){
    //   setcategoriesArray(current => [...current,"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
    // }
    
  }, [reload]);




  //get Graph Summary data By User Id
  const getGraphSummaryByUserId  = async () => {

    const response = await API.get(`${dashboardRoute}/graph-summary/${userId}`, 
                                    { params: { date_range: selectedRange } }
                                    // ,{headers: headers}
                                  ); // [GET] https://localhost:5000/api/dashboard/graph-summary/:id
    if (response.data.data) {
      setGraphSummaryDatas([...response.data.data.series]);
    }
  };

  const options = {
    xaxis: {
      categories: categoriesArray
    }
  };
  const series = graphSummaryDatas
     
return <Chart options={options} series={series} type="area" />;

}
export default LineChart
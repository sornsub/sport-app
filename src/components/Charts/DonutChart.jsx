import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import DashboardAPI from '../../api/services/dashboard';

import 'apexcharts/dist/apexcharts.css';

const DonutChart = ({selectedRange, userId, reload}) => {

  const [activitiesTypeData, setActivitiesTypeData] = useState([]);

  useEffect(() => {
    getActivitiesTypeByUserId();
  }, []);

  // get activities Type Data By User Id
  const getActivitiesTypeByUserId  = async () => {
    const response = await DashboardAPI.getActivitiesTypeByUserId(userId, selectedRange)
    if (response) {
      setActivitiesTypeData([...response.chart_datas]);
    }
  };

  const seriesArray = [];
  const labelsArray = [];

  activitiesTypeData.map((activity) => (
    seriesArray.push(activity.count),
    labelsArray.push(activity.activity_type_name)
  ))
  
    const chartData = {
        series: seriesArray,
        options: {
          chart: {
            type: 'donut',
          },
          labels: labelsArray,
          legend: {
              position: 'right'
            }
        },
      };
  return (
    <Chart
         options={chartData.options}
         series={chartData.series}
         type="donut"
         width="480"
      />
  )
}

export default DonutChart
import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import DashboardAPI from '../../api/services/dashboard';

import 'apexcharts/dist/apexcharts.css';

const LineChart = ({selectedRange, userId, reload}) => {

  const [graphSummaryDatas, setGraphSummaryDatas] = useState([]);
  const [categoriesArray, setcategoriesArray] = useState([]);
  
  useEffect(() => {
    getGraphSummaryByUserId();
  }, [reload]);

  //get Graph Summary data By User Id
  const getGraphSummaryByUserId  = async () => {
    const response = await DashboardAPI.getGraphSummaryDataByUserId(userId, selectedRange)
    if (response) {
      setGraphSummaryDatas([...response.series]);
      setcategoriesArray([...response.categories]);
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
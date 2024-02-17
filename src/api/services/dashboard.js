import axios from '../axios';

const dashboardRoute = "api/dashboard" 
const token = localStorage.getItem('token');
const headers = {'Authorization': `Bearer ${token}`}

//card summary
// [GET] {hostName}/api/dashboard/summary-card/:id
const getsummaryCardByUserId = async (userId, selectedRange) => {
    const response = await axios.get(`${dashboardRoute}/summary-card/${userId}`, 
                                    { params: { date_range: selectedRange } }, 
                                    {headers: headers}
                                  ); 
    const data = response.data.data;
    return data;
}

//donut chart
// [GET] {hostName}/api/dashboard/activities-type/:id
const getActivitiesTypeByUserId = async (userId, selectedRange) => {
    const response = await axios.get(`${dashboardRoute}/activities-type/${userId}`,
                                    { params: { date_range: selectedRange } },
                                    {headers: headers}
                                  );
  const data = response.data.data;
  return data;
}

//lines chart
// [GET] {hostName}/api/dashboard/graph-summary/:id
const getGraphSummaryDataByUserId = async (userId, selectedRange) => {
    const response = await axios.get(`${dashboardRoute}/graph-summary/${userId}`, 
                                    { params: { date_range: selectedRange } },
                                    {headers: headers}
                                  ); 
    const data = response.data.data;
    return data;
}

export default {getsummaryCardByUserId, getActivitiesTypeByUserId, getGraphSummaryDataByUserId}



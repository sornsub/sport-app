import axios from '../axios';

const activityTypeRoute = "api/activity-type" 
const token = localStorage.getItem('token');
const headers = {'Authorization': `Bearer ${token}`}

// [GET] {hostname}/api/activity-type
const getActivitiesTypeList = async () => {
    const response = await axios.get(`${activityTypeRoute}`, {headers: headers});
    return response;
}

// [GET] {hostname}/api/activity-type/:id
const getActivityTypeById = async (id) => {
    const response = await axios.get(`${activityTypeRoute}/${id}`, {headers: headers});
    return response.data;
}

// [GET] {hostname}/api/activity-type/:id
const getMetById = async (id) => {
    const response = await axios.get(`${activityTypeRoute}/${id}`, {headers: headers}); 
    return response.data;
}

export default { 
                getActivitiesTypeList,
                getActivityTypeById, 
                getMetById
               };
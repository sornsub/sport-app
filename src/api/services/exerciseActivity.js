import axios from '../axios';

const exerciseActivityRoute = "api/exercise-activities" 
const token = localStorage.getItem('token');
const headers = {'Authorization': `Bearer ${token}`}

// [GET] {hostName}/api/exercise-activities/:id
const getExerciseActivities = async () => {
    const response = await axios.get(`${exerciseActivityRoute}/`, {headers: headers});
    return response.data.data;
}

// [GET] {hostName}/api/exercise-activities/:id
const getExerciseActivityById = async (id) => {
    const response = await axios.get(`${exerciseActivityRoute}/${id}`, {headers: headers});
    return response.data.data;
}

// [POST] {hostName}/api/exercise-activities
const createExerciseActivity = async (requestData) => {
    const response = await axios.post(`${exerciseActivityRoute}`, requestData, {headers: headers});
    const data = response.data;
    return data;
}

// [PUT] {hostName}/api/exercise-activities/:id
const updateExerciseActivity = async (requestData) => {
    const response = await axios.put(`${exerciseActivityRoute}/${requestData.id}`, requestData, {headers: headers});
    const data = response.data;
    return data;
}

// [DELETE] {hostName}/api/exercise-activities/:id
const deleteExerciseActivity = async (id) => {
    const response = await API.delete(`${exerciseActivityRoute}/${id}`, {headers: headers})
    return response;
}

// [GET] {hostName}/api/exercise-activities/favorite/:user_id
const getFavoriteActivityTypeByUserId = async (user_id) => {
    const response = await axios.get(`${exerciseActivityRoute}/favorite/${user_id}`, {headers: headers});
    return response.data;
}

export default {
                getExerciseActivities, 
                getExerciseActivityById, 
                createExerciseActivity,
                updateExerciseActivity,
                deleteExerciseActivity,
                getFavoriteActivityTypeByUserId
               };
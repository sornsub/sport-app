import axios from '../axios';

const uploadImageRoute = "api/upload-image" 
const token = localStorage.getItem('token');
const headers = {'Authorization': `Bearer ${token}`}

// [POST] {hostName}/api/exercise-activities
const uploadImage = async (requestData) => {
    const response = await axios.post(`${uploadImageRoute}`, requestData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
     const data = response.data;
    return data;
}
export default {uploadImage};
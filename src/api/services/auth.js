import axios from '../axios';

const authRoute = "api/authen" 

const signup = async (requestData) => {
    const response = await axios.post(`${authRoute}/signup`, requestData); 
    return response;
}
const login = async (requestData) => {
    const response = await axios.post(`${authRoute}/login`, requestData); 
    return response;
}
const forgotPassword = async (requestData) => {
    const response = await axios.post(`${authRoute}/forgot-password`, requestData); 
    return response;
}
const resendCode = async (requestData) => {
    const response = await axios.post(`${authRoute}/resend-code`, requestData); 
    return response;
}
const verify = async (requestData) => {
    const response = await axios.patch(`${authRoute}/verify`, requestData); 
    return response;
}

const createNewPassword = async (requestData) => {
    const response = await axios.patch(`${authRoute}/create-new-password`, requestData); 
    return response;
}

export default { 
    signup,
    login, 
    forgotPassword,
    resendCode,
    verify,
    createNewPassword
   };
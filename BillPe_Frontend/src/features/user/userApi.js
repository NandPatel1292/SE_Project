import axios from "axios"

export const loginCall = (data) => {
    return axios.post('/api/auth/login', data)
}

export const signupcall = (data) => {
    return axios.post('/api/auth/register', data)
}

export const adddetailscall = (data) => {
    return axios.patch('/api/user/update-organisation-details', data)
}

export const subscribeplancall = (data) => {
    return axios.post(`/api/user/access?type=${data}`)
}

export const logoutcall = () => {
    return axios.get(`/api/auth/logout`);
}

export const updateusercall = (data) => {
    return axios.patch(`/api/user/change-user-details`, data);
}

// export const signupWithGoogleCall = (data) => {
//     return axios.post('/api/v1/user/google', data)
// }

// export const deleteUserCall = (data) => {
//     return axios.delete(`/api/v1/user/delete/${data}`);
// }


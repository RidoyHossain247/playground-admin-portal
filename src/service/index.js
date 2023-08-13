import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        'Content-type': 'application/json',
    },
});
export default api;


export const setAuthToken = (authToken = null) => {
    localStorage.setItem('authToken', authToken)
    api.defaults.headers.common['Authorization'] = authToken;
}


export const clearAuthToken = () => {
    localStorage.removeItem('authToken')
    api.defaults.headers.common['Authorization'] = '';
}


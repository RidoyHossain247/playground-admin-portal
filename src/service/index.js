import axios from 'axios';

const token  = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMmVlMTM4ZGE0ZmQ5YTQ0NzZmY2QiLCJmaXJzdE5hbWUiOiJTaWFtIiwibGFzdE5hbWUiOiJJc2FsYW0iLCJlbWFpbCI6InNpYW1AZ21haWwuY29tIiwic3RhdHVzIjoxLCJ0eXBlIjoxLCJpYXQiOjE2ODIyMzI1MTYsImV4cCI6MTY4MzUyODUxNn0.-n1U3JP69V9EbNheIwQpPV7SPsbetGwQCsqYjnYP2Fw`

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        'Content-type': 'application/json', 
        // Accept: 'application/json',
        Authorization: token,
    },
});
export default api;

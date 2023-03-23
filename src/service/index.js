import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM2OGY5ZTQ3NzVmODZkMmNlOTdkZTQiLCJmaXJzdE5hbWUiOiJNZCIsImxhc3ROYW1lIjoiUmFiYnkiLCJlbWFpbCI6InJhYmJ5QGdtYWlsLmNvbSIsInN0YXR1cyI6MSwidHlwZSI6MSwiaWF0IjoxNjc5NDY4MjcwLCJleHAiOjE2ODA3NjQyNzB9.WFyagy_ISnBrkH9k4Py9W6H76R056iASdHWwuw7FUMg',
    },
});
export default api;

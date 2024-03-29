import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://admin.jobbank.mv/exam-prep/public/api',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache"
    }
});

export default Api;
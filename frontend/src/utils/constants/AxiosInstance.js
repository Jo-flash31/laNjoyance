import axios from 'axios';

const API_URL = 'http://localhost:8000'

const AXIOS_INSTANCE = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    },
});

export default AXIOS_INSTANCE;
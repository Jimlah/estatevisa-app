import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.estatevisa.meednetworks.com/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const addBearerToken = (token) => {
    http.interceptors.request.use(
        config => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
}


export default http;
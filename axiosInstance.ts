import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
        console.log("Retrieved token:", token); // Log the token for debugging
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Set the token in the headers
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;

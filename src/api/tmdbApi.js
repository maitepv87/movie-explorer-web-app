import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const tmdbApi = axios.create({
    // baseURL: 'https://api.themoviedb.org/3'
    baseURL: BASE_URL
})
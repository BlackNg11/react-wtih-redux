import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2d9767df00dff9fa67a00ee6981ddf01bd54564be05b73798ca988deff41fcf8'
    }
});
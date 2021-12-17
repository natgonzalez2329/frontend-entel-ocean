import axios from 'axios';
const KEY = 'AIzaSyBC8YMSqquBiKHjUodJ6bIXu9kdlACHUDc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
    
});

import axios from 'axios';
const KEY = 'AIzaSyCTDhiSdbrnnOvu5MvEbAkimgKisCR6yzg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 12,
        key: KEY
    }
})
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-cf562.firebaseio.com/'
});

export default instance;
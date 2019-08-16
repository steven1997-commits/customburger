import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-builder-ea013.firebaseio.com/"
});

export default instance;
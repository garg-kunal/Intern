import axios from 'axios';

const instance=axios.create({
    baseURL:"http://3fae84fae358.ngrok.io"
});

// instance.interceptors.request

export default instance;
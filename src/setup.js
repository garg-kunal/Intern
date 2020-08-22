import axios from 'axios';

const instance=axios.create({
    baseURL:"http://06f72b4624d2.ngrok.io"
});

// instance.interceptors.request

export default instance;


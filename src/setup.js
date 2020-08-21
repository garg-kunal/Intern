import axios from 'axios';

const instance=axios.create({
    baseURL:"http://14f18b4a5092.ngrok.io"
});

// instance.interceptors.request

export default instance;
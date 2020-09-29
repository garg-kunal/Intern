import axios from 'axios';


const instance=axios.create({
    // baseURL:"https://api.mergeintern.com"
    baseURL:"http://732c41926b06.ngrok.io"
});



export default instance;


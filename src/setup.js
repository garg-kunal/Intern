import axios from 'axios';


const instance=axios.create({
    // baseURL:"https://api.mergeintern.com"
    baseURL:"http://c95daa139704.ngrok.io"
});



export default instance;


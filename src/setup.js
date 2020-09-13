import axios from 'axios';


const instance=axios.create({
    // baseURL:"https://api.mergeintern.com"
    baseURL:"http://8db57eda535c.ngrok.io"
});



export default instance;


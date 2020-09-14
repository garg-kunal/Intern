import axios from 'axios';


const instance=axios.create({
    baseURL:"https://api.mergeintern.com"
    // baseURL:"http://91e7de468a0f.ngrok.io"
});



export default instance;


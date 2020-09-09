import axios from 'axios';


const instance=axios.create({
    baseURL:"https://api.mergeintern.com"
});



export default instance;


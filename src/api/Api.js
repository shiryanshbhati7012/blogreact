import axios from 'axios';


const tokens=  localStorage.getItem("token");



let Api = axios.create({  
    baseURL: "http://localhost:5000/posts" ,
    headers : {
        "Content-Type": "application/json",
    "Authorization":`Bearer ${tokens}`
    }
});
export default Api;
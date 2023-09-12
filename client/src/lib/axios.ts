
import axios from 'axios'

let url;
if(import.meta.env.MODE === "development"){
    url ="http://localhost:8000/api"
}else{
    url = "https://connecktapi.onrender.com/api"
}
export const apiClient = axios.create({
    baseURL:url
})

apiClient.interceptors.request.use( async (config) => {

    const token = await localStorage.getItem('token');

    // Log the token to check if it's retrieved correctly
    console.log('Retrieved token:', token);
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    
}, (error) =>{
     return Promise.reject(error)
}
)


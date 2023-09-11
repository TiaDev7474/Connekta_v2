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
    apiClient.defaults.headers.common['Authorization'] = await localStorage.getItem('token');
    return config
}, (error) =>{
     return Promise.reject(error)
}
)


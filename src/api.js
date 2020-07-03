import axios from "axios";
const baseURL="http://localhost:3000/";
export default{
    signIn:data=>axios.post(`http://localhost:3000/${data.possition}/signin`,data.credentials),
    signUp:data=>axios.post(`http://localhost:3000/${data.possition}`,data.credentials),
    getMedicene:()=>axios.get(`http://localhost:3000/medicine`),
    addPatient:data=>axios.post(`http://localhost:3000/patient`,data),
    searchPatient:data=>axios.post(`${baseURL}patient/search`,data).then(res=>res.data).catch(err=>err),
    resetPassword:data=>axios.patch(`${baseURL}${data.possition}`,data),
    getDoctor:()=>axios.get(`${baseURL}doctor`).then(res=>res.data),
    shedule:(data)=>axios.post(`${baseURL}shedule`,data).then(res=>res.data),
    getPatient:()=>axios.get(`${baseURL}shedule`).then(res=>res.data),          
}
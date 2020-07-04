import axios from "axios";
const baseURL="http://localhost:3000/";
export default{
    signIn:data=>axios.post(`${baseURL}${data.possition}/signin`,data.credentials),
    signUp:data=>axios.post(`${baseURL}${data.possition}`,data.credentials),
    getMedicene:()=>axios.get(`${baseURL}medicine`),
    addPatient:data=>axios.post(`${baseURL}patient`,data),
    searchPatient:data=>axios.post(`${baseURL}patient/search`,data).then(res=>res.data).catch(err=>err),
    resetPassword:data=>axios.patch(`${baseURL}${data.possition}`,data),
    getDoctor:()=>axios.get(`${baseURL}doctor`).then(res=>res.data),
    shedule:(data)=>axios.post(`${baseURL}shedule`,data).then(res=>res.data),
    getPatient:()=>axios.get(`${baseURL}shedule`).then(res=>res.data),  
    addMediciene:(data)=>axios.post(`${baseURL}medicine`,data).then(res=>res.data),
    getMedicene:()=>axios.get(`${baseURL}medicine`).then(res=>res.data),
    updateMedicene:data=>axios.patch(`${baseURL}medicine`,data),
    deleteMedicene:data=>axios.delete(`${baseURL}medicine`,{params:data}),       
}
import axios from "axios";

export default{
    signIn:data=>axios.post(`http://localhost:3000/${data.possition}/signin`,data.credentials),
    signUp:data=>axios.post(`http://localhost:3000/${data.possition}`,data.credentials),
    getMedicene:()=>axios.get(`http://localhost:3000/medicine`),
    addPatient:data=>axios.post(`http://localhost:3000/patient`,data)              
}
import React, { useEffect, useState } from 'react';
import api from '../../../api';
import AppointmentList from './AppointmentList';
import PatientProfile from './PatientProfile';

const AppointmentHome = () => {
    const [patients,setPatients] =useState([]);
    const [user,setUser]         =useState("");
    useEffect(()=>{
        api.getPatient()
        .then(res=>setPatients(res))
        .catch(err=>console.log(err))
    },[])
    return ( 
        <>
            {user===""&&<AppointmentList patients={patients} setUser={setUser}/>}
            {user!==""&&<PatientProfile data={user}/>}
        </>
     );
}
 
export default AppointmentHome;
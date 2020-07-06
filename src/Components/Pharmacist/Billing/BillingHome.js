import React, { useState, useEffect } from 'react';
import BillingPatienList from './BillingPatientList';
import api from '../../../api';

const BillingHome = () => {
    const [patients,setPatients] =useState([]);
    useEffect(()=>{
        api.getPrescription()
        .then(res=>{
            setPatients(res.data);
        })
        .catch(err=>console.log(err));
    },[])
    return (
        <BillingPatienList patients={patients}/>
     );
}
 
export default BillingHome;
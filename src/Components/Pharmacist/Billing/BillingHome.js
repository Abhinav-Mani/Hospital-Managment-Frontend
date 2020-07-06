import React, { useState, useEffect } from 'react';
import BillingPatienList from './BillingPatientList';
import api from '../../../api';
import BillingPage from './BillingPage';

const BillingHome = () => {
    const [uniquePatients,setUniquePatients] =useState([]);
    const [prescriptions,setPrescription] =useState([]);
    const [patient,setPatient] = useState("");
    const [currPrescription,setCurrentPrescription]= useState([]);
    const [updated,setUpdated]=useState(true);
    useEffect(()=>{
        api.getPrescription()
        .then(res=>{
            let patientsId=res.map(data=>data[0]);
            setUniquePatients([...new Set(patientsId)]);
            setPrescription(res);
        })
        .catch(err=>console.log(err));
    },[updated])
    useEffect(()=>{
        if(prescriptions.length!==0)
            setCurrentPrescription( prescriptions.filter(curr=>curr[0]===patient))
    },[patient,updated])
    return (
        <>
        {!patient&&<BillingPatienList patients={uniquePatients} setPatient={setPatient}/>}
        {patient&&<BillingPage prescriptions={currPrescription} updated={updated} setUpdated={setUpdated}/>}
        </>
     );
}
 
export default BillingHome;
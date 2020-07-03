import React, { useState, useEffect } from 'react';
import {Form,Button,Message} from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import api from '../../../api';
const ShedulePage = () => {
    const [doctorList,setDoctorList] =useState([]);
    const [patientId,setPatientId]   =useState("");
    const [doctor,setDoctor]         =useState("");
    const [date,setDate]             =useState(null);  
    const [loading,setLoading]       =useState(false);
    const [error,setError]           =useState({});
    const [message,setMessage]       =useState("");
    useEffect(()=>{
        api.getDoctor().then(res=>{
            setDoctorList( res.map(r=>({
                text:r[0],
                value:r[0],
                key:r[0]
            }))
            )
        });
        //setDoctorList(api.getDoctor());
    },[])
    const valid=()=>{
        const err={};
        if(date===null){
            err.date="Cannot be Empty";
        }
        if(patientId===""){
            err.patientId="Cannot be Empty";
        }
        if(doctor===""){
            err.doctor="Cannot be Empty";
        }
        setError(err)
        return (Object.keys(err).length===0)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const querryParmas={
            doctor:doctor,
            id:patientId,
            date:new Date(date).toISOString().split('T')[0]
        }
        if(valid()){
            api.shedule(querryParmas)
            .then(res=>{
                setMessage(res.Message);
                setLoading(false);
            })
            .catch(err=>{
                setLoading(false);
            })
            //console.log(querryParmas);
        }
        //api.shedule()
    }
    return (
        <> 
        {message&&<Message size='large'>{message}</Message>}
        <Form loading={loading} onSubmit={submitHandler}>
         <Form.Group>
          <Form.Input fluid 
          label='Patient Id'
          error={
              error.patientId?{
                content: error.patientId,
                pointing: 'below',
              }:null
          } 
          width={12}
          value={patientId}
          onChange={(e)=>setPatientId(e.target.value)}
          placeholder='Patient Id' />
          <Form.Input
            error={
                error.date?{
                content: error.date,
                pointing: 'below',
                }:null
            } 
            label="Appointment Date"
          >
            <SemanticDatepicker
            width={4}
            onChange={(event, data) => setDate(data.value)}
            />
          </Form.Input>
          </Form.Group>
          <Form.Select
            fluid
            error={
                error.doctor?{
                  content: error.doctor,
                  pointing: 'below',
                }:null
            } 
            label='Doctor'
            options={doctorList}
            onChange={(e,{value})=>setDoctor(value)}
            placeholder='Select One Doctor'
          />
          <Button fluid type='submit'>Shedule</Button>
        </Form>
        </>
     );
}
 
export default ShedulePage;
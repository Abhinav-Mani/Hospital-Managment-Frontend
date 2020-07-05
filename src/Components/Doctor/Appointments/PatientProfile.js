import React, { useState,useEffect } from 'react';
import { Card ,Icon,Button,List,Form} from 'semantic-ui-react'
import api from '../../../api';

const PatientProfile = ({data}) => {
    const [sending,setSending] = useState(false);
    const [prescriptions,setPrescriptions] =useState([]); 
    const [medicinces,setMedinces] =useState([]);
    const [error,setError]=useState("");
    useEffect(()=>{
        api.getMedicene().then(res=>{
            setMedinces( res.map(r=>({
                text:r[0],
                value:r[0],
                key:r[0]
            })))
        });
    },[])
    const submitHandler=()=>{
        console.log("clicked");
        let querryParams={
            id:data[0],
            list:prescriptions
        }
        api.addPrescription(querryParams)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }
    const addPrescription=(value)=>{
        if(prescriptions.includes(value)){
            setError("Already Prescribed");
        }else{
            setPrescriptions([...prescriptions,value])
        }
    }
    const removePrescription=(value)=>{
        setPrescriptions( prescriptions.filter(prescription=>prescription!==value) );
    }
    const mail=()=>{
        setSending(true);
        const querryParams={
            email:data[7],
            message:"You are requested for further appointment with doctor"
        }
        api.mail(querryParams)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        .finally(()=>setSending(false));
    }
    return ( 
        <Card.Group>
        <Card fluid>
            <Card.Content>
                <Card.Header>{data[5]} {data[6]}</Card.Header>
                <Card.Meta>{data[9]}</Card.Meta>
                <Card.Meta>{data[10]}</Card.Meta>
                <Card.Meta>{data[7]}</Card.Meta>
                <Card.Meta>{data[8].split("T")[0]}</Card.Meta>
            <Card.Description>{data[0]}</Card.Description>
            </Card.Content>
        </Card>
        <Card fluid color='red'>
            <Card.Content>
                <Card.Header>
                    Email Patient For Future Appointment
                    <Button color='red' floated={'right'} loading={sending} onClick={()=>mail()}>
                        <Icon name='mail' />
                        Email
                    </Button>
                </Card.Header>
            </Card.Content>
        </Card>
        <Card fluid>
            <Card.Content >
                <List divided relaxed>
                    {prescriptions.map(prescription=>(
                        <List.Item key={prescription}>
                            {prescription}
                            <Button floated='right' onClick={()=>removePrescription(prescription)} color="red"><Icon name="close" floated="right"/></Button>
                        </List.Item>
                    ))}
                </List>
                <Form>
                <Form.Select
                    fluid
                    error={
                        error?{
                        content: error,
                        pointing: 'below',
                        }:null
                    } 
                    label='Mediciene'
                    options={medicinces}
                    onChange={(e,{value})=>addPrescription(value)}
                    placeholder='Prescribe Medicene'
                /> 
                <Button fluid onClick={()=>submitHandler()} color='green'>Prescribe</Button>
                </Form>
            </Card.Content>
        </Card>
         </Card.Group>
     );
}
 
export default PatientProfile;
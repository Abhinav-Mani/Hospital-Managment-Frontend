import React,{useState} from 'react';
import { Button, Form } from 'semantic-ui-react'

import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import api from "../../../api";

const SearchForm = ({loading,setLoading,setResult}) => {
    const [DOB, setDate] = useState(null);
    const [email,setEmail]          = useState("");
    const [firstName,setFirstName]  = useState("");
    const [lastName, setLastName ]  = useState("");
    const [phoneNo , setPhoneNo  ]  = useState("");
    const [UID,setUID]              = useState("");
    const onChange = (event, data) => setDate(data.value);
    const submitHandler = e =>{
        e.preventDefault();
        setLoading(true);
        let querryPrams={
            uid:UID,
            firstname:firstName,
            email:email,
            phoneNo:phoneNo,
            lastName:lastName,
            dob:DOB
        }
        api.searchPatient(querryPrams)
        .then(res=>{
            setResult(res);
            setLoading(false);
            console.log(res);
        })
        .catch(err=>setLoading(false));
    }
    return ( 
        <Form style={{padding:40}} onSubmit={submitHandler} >
          <Form.Group widths='equal'>
          <Form.Input fluid 
          label='First name' 
          placeholder='First name' 
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}/>
          <Form.Input fluid 
          label='Last name' 
          placeholder='Last name'
          value={lastName}
          onChange={e=>setLastName(e.target.value)} />
          <Form.Input
            fluid
            label='UID'
            value={UID}
            onChange={e=>setUID(e.target.value)}
            placeholder='UID'
          />
        </Form.Group>
        <Form.Group>
            <Form.Input 
            label='Email' 
            placeholder='joe@schmoe.com' 
            width={8}
            value={email}
            onChange={e=>setEmail(e.target.value)} />
            <Form.Input 
            label='Phone No' 
            placeholder='1234567890' 
            width={4}
            value={phoneNo}
            onChange={e=>setPhoneNo(e.target.value)} /> 
            <SemanticDatepicker
            width={16} 
            label="D.O.B"
            onChange={onChange}/> 
        </Form.Group>
        <Button fluid disabled={loading} type='submit'>Search</Button>
        </Form>
     );
}
 
export default SearchForm;
import React,{useState} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const RegisterForm = () => {
    const [DOB, setDate] = useState(null);
    const [email,setEmail]          = useState("");
    const [firstName,setFirstName]  = useState("");
    const [lastName, setLastName ]  = useState("");
    const [phoneNo , setPhoneNo  ]  = useState("");
    const [agree,setAgree] =useState(false);
    const onChange = (event, data) => setDate(data.value);
    const submitHandler = e =>{
        e.preventDefault();
        console.log(firstName+" "+lastName+" "+phoneNo+" "+agree+" "+DOB);
    }
    return ( 
        <Form style={{padding:40}} onSubmit={submitHandler}>
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
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
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
            <SemanticDatepicker label='D.O.B' onChange={onChange} width={4} /> 
        </Form.Group>
        <Form.Field>
            <Checkbox
            checked={agree}
            onChange={e=>setAgree(!agree)} 
            label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        </Form>
     );
}
 
export default RegisterForm;
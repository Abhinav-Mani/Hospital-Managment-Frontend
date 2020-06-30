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
    const [error,setError] = useState({});
    const [gender,setGender] = useState(null);
    const onChange = (event, data) => setDate(data.value);
    const isValid=()=>{
        const err={};
        if(! /^[\w\.\-]+\@[\w]{2,5}\.[\w]{2,3}$/.test(email)){
            err.email="Enter a Valid Email";
        }
        if(firstName.length<3){
            err.firstName="Must be 3 character Long"
        }
        if(lastName.length<3){
            err.lastName="Must be 3 character Long"
        }
        if(DOB===null){
            err.date="Must be a valid date"
        }
        if( !/^\d{10}$/.test(phoneNo)){
            err.phoneNo="Must bea valid Phone NO"
        }
        if(gender===null){
            err.gender="Select your Gender"
        }
        setError(err);
        return Object.keys(err).length===0;
    }
    const submitHandler = e =>{
        e.preventDefault();
        if(isValid()){
            console.log(firstName+" "+lastName+" "+phoneNo+" "+agree+" "+DOB);
        }
    }
    return ( 
        <Form style={{padding:40}} onSubmit={submitHandler}>
          <Form.Group widths='equal'>
          <Form.Input fluid 
          label='First name' 
          placeholder='First name' 
          value={firstName}
          error={ error.firstName?
            {
                content: error.firstName,
                pointing: 'below',
            }:null
          }
          onChange={(e)=>setFirstName(e.target.value)}/>
          <Form.Input fluid 
          label='Last name' 
          placeholder='Last name'
          value={lastName}
          error={ error.lastName?
            {
                content: error.lastName,
                pointing: 'below',
            }:null
          }
          onChange={e=>setLastName(e.target.value)} />
          <Form.Select
            fluid
            label='Gender'
            error={ error.gender?
                {
                    content: error.gender,
                    pointing: 'below',
                }:null
            }
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
            error={ error.email?
                {
                    content: error.email,
                    pointing: 'below',
                }:null
            }
            onChange={e=>setEmail(e.target.value)} />
            <Form.Input 
            label='Phone No' 
            placeholder='1234567890' 
            width={4}
            value={phoneNo}
            error={ error.phoneNo?
                {
                    content: error.phoneNo,
                    pointing: 'below',
                }:null
            }
            onChange={e=>setPhoneNo(e.target.value)} /> 
            <Form.Input
            error={ error.date?
                {
                    content: error.date,
                    pointing: 'below',
                }:null
              }
              label='D.O.B'
            >
            <SemanticDatepicker
            width={16} 
            onChange={onChange}/> 
            </Form.Input>
        </Form.Group>
        <Form.Field>
            <Checkbox
            checked={agree}
            onChange={e=>setAgree(!agree)} 
            label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button disabled={!agree} type='submit'>Submit</Button>
        </Form>
     );
}
 
export default RegisterForm;
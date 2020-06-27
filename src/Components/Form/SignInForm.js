import React, { useState } from 'react';
import { Button, Form ,Input} from 'semantic-ui-react'
const SignInForm = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [possition,setPostion] = useState('');
    const [error , setError    ] = useState({});
    const valid=()=>{
        var error={};
        if(username.length<5){
            error.username="Must be 5 Character Long"
        }
        if(password.length<5){
            error.password="Must be 5 Character Long"
        }
        if(possition === ""){
            error.possition="No position selected"
        }
        return error;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let err=valid();
        if(Object.keys(err).length===0){
            setError(err);
           console.log(username+" "+password);
        }else{
            setError(err);
            console.log(err);
        }
    }
    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Field
                label={"Username"}
                control={Input}
                placeholder='Username'  
                value={username} 
                onChange={e=>setUsername(e.target.value)}
                error={ error.username?
                    {
                        content: error.username,
                        pointing: 'below',
                    }:null
                }
            />
            <Form.Field
                label={"Password"}
                control={Input}
                placeholder='Password' 
                type={'password'} 
                value={password} 
                onChange={e=>setPassword(e.target.value)}
                error={ error.password?
                    {
                        content: error.password,
                        pointing: 'below',
                    }:null
                }
            />
            <Form.Field 
            label='Post' 
            control='select' 
            value={possition} 
            error={ error.possition?
                {
                    content: error.possition,
                    pointing: 'below',
                }:null
            }
            onChange={e=>setPostion(e.target.value)}
            >
                <option value=''>Select One</option>
                <option value='doctor'>Doctor</option>
                <option value='receptionist'>Receptionist</option>
                <option value='pharmsist'>Pharmsist</option>
            </Form.Field>
            <Button type='submit'>Sign In</Button>
        </Form>
     );
}
 
export default SignInForm;
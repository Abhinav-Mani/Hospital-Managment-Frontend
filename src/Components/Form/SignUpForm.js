import React, { useState } from 'react';
import { Button, Form ,Input} from 'semantic-ui-react'
import FormError from "./FormError"
import api from "../../api"
const SignUpForm = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [possition,setPostion] = useState('');
    const [error , setError    ] = useState({});
    const [loading, setLoading ] = useState(false);
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
    const SignUp=()=>{

        let credentials={
            username:username,
            password:password
        } ;
        api.signUp({possition:possition,credentials:credentials})
        .then(res=>setLoading(false))
        .catch(err=>{
            if(!err.response){
                setError({login:"Connection Timeout"});
                setLoading(false);
            }else if (err.response.status) {
              setError({login:"Username Already Taken"});
              setLoading(false);
              return;
            }
            return console.log(err)
          }
        );
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let err=valid();
        if(Object.keys(err).length===0){
            setError(err);
            SignUp();
            setLoading(true);
        }else{
            setError(err);
            console.log(err);
        }
    }
    return ( 
        <>
        {error.login&&<FormError message={error.login}/>}
        <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Field
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
                <option value='pharmacist'>Pharmsist</option>
            </Form.Field>
            <Button type='submit'>Sign Up</Button>
        </Form>
        </>
     );

}
 
export default SignUpForm;
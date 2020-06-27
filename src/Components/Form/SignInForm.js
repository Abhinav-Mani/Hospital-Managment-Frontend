import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
const SignInForm = () => {
    const [usename,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [possition,setPostion] = useState('');
    return ( 
        <Form>
            <Form.Field>
                <label>Username</label>
                <input placeholder='Username' value={usename} onChange={e=>setUsername(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type={'password'} value={password} onChange={e=>setPassword(e.target.value)}/>
            </Form.Field>
            <Form.Field label='Post' control='select' value={possition} onChange={e=>setPostion(e.target.value)}>
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
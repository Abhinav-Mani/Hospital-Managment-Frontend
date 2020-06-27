import React from 'react';
import { Button, Form } from 'semantic-ui-react'
const SignUpForm = () => {
    return ( 
        <Form>
            <Form.Field>
            <label>Username</label>
            <input placeholder='Username' />
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type={'password'}/>
            </Form.Field>
            <Form.Field label='Post' control='select'>
                <option value='none'>Select One</option>
                <option value='doctor'>Doctor</option>
                <option value='receptionist'>Receptionist</option>
                <option value='pharmsist'>Pharmsist</option>
            </Form.Field>
            <Button type='submit'>Sign Up</Button>
        </Form>
     );
}
 
export default SignUpForm;
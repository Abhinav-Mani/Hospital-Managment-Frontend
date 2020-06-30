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
    const [currentDate, setNewDate] = useState(null);
    const onChange = (event, data) => setNewDate(data.value);
    return ( 
        <Form style={{padding:40}}>
          <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
        <Form.Group>
            <Form.Input label='Email' placeholder='joe@schmoe.com' width={8} />
            <Form.Input label='Phone No' placeholder='1234567890' width={4} /> 
            <SemanticDatepicker label='D.O.B' onChange={onChange} width={4} /> 
        </Form.Group>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        </Form>
     );
}
 
export default RegisterForm;
import React from 'react';
import { Button, List } from 'semantic-ui-react'

const BillingPatienList = ({patients,setPatient}) => {
    return ( 
        <List divided verticalAlign='middle'>
            {
                patients.map(patient=>(
                    <List.Item key={patient}>
                        <List.Content floated='right'>
                            <Button onClick={()=>setPatient(patient)}>View</Button>
                        </List.Content>
                        <List.Content>{patient}</List.Content>
                    </List.Item>
                ))
            }
        </List>
     );
}
 
export default BillingPatienList;
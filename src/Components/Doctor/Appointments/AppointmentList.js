import React from 'react';
import { Button, List } from 'semantic-ui-react'

const AppointmentList = ({patients,setUser}) => {
    return ( 
        <List divided verticalAlign='middle'>
            {
                patients.map(patient=>(
                    <List.Item key={patient[0]}>
                        <List.Content floated='right'>
                            <Button onClick={()=>setUser(patient)}>View</Button>
                        </List.Content>
                        <List.Content>{patient[5]} {patient[6]}</List.Content>
                    </List.Item>
                ))
            }
        </List>
     );
}
 
export default AppointmentList;
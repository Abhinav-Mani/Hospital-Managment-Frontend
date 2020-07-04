import React, { useState } from 'react';
import { Card ,Icon,Button,List,Form} from 'semantic-ui-react'
import api from '../../../api';

const PatientProfile = ({data}) => {
    const [sending,setSending] = useState(false); 
    const [medicinces,setMedinces] =useState(["Med1","Med2"]);
    const mail=()=>{
        setSending(true);
        const querryParams={
            email:data[7],
            message:"You are requested for further appointment with doctor"
        }
        api.mail(querryParams)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        .finally(()=>setSending(false));
    }
    return ( 
        <Card.Group>
        <Card fluid>
            <Card.Content>
                <Card.Header>{data[6]} {data[7]}</Card.Header>
                <Card.Meta>{data[9]}</Card.Meta>
                <Card.Meta>{data[10]}</Card.Meta>
                <Card.Meta>{data[7]}</Card.Meta>
                <Card.Meta>{data[8].split("T")[0]}</Card.Meta>
            <Card.Description>{data[0]}</Card.Description>
            </Card.Content>
        </Card>
        <Card fluid color='red'>
            <Card.Content>
                <Card.Header>
                    Email Patient For Future Appointment
                    <Button color='red' floated={'right'} loading={sending} onClick={()=>mail()}>
                        <Icon name='mail' />
                        Email
                    </Button>
                </Card.Header>
            </Card.Content>
        </Card>
        <Card fluid>
            <Card.Content >
                <List divided relaxed>
                    {medicinces.map(medeicine=>(
                        <List.Item>
                            {medeicine}
                        </List.Item>
                    ))}
                </List>
                <Form>
                    
                </Form>
            </Card.Content>
        </Card>
         </Card.Group>
     );
}
 
export default PatientProfile;
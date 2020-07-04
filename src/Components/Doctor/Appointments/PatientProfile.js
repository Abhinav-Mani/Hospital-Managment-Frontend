import React from 'react';
import { Card ,Icon,Button} from 'semantic-ui-react'
import api from '../../../api';

const PatientProfile = ({data}) => {
    const mail=()=>{
        const querryParams={
            email:data[7],
            message:"You are requested for further appointment with doctor"
        }
        api.mail(querryParams);
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
                    <Button color='red' floated={'right'} onClick={()=>mail()}>
                        <Icon name='mail' />
                        Email
                    </Button>
                </Card.Header>
            </Card.Content>
        </Card>
         </Card.Group>
     );
}
 
export default PatientProfile;
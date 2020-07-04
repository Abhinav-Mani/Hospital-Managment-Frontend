import React from 'react';
import { Card ,Icon,Button} from 'semantic-ui-react'

const PatientProfile = ({data}) => {
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
                    <Button color='red' floated={'right'}>
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
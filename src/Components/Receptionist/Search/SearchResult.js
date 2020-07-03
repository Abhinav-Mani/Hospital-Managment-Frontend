import React from 'react';
import {Card} from 'semantic-ui-react'
const SearchReasult = ({loading,result}) => {
    return ( 
    <Card.Group>
    {
        result.map(data=>(
            <Card key={data[0]}>
            <Card.Content>
                <Card.Header>{data[1]} {data[2]}</Card.Header>
                <Card.Meta>{data[3]}</Card.Meta>
                <Card.Meta>{data[6]}</Card.Meta>
                <Card.Meta>{data[5]}</Card.Meta>
                <Card.Meta>{data[4].split("T")[0]}</Card.Meta>
            <Card.Description>{data[0]}</Card.Description>
            </Card.Content>
            </Card>
        ))
    }
    </Card.Group>
     );
}
 
export default SearchReasult;
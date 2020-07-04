import React, { useState } from 'react';
import { Form,Button } from 'semantic-ui-react'

const MediceneForm = ({amount,cost,warning}) => {
    const [quantity,setQuantity] = useState(amount);
    const [min,setMin] = useState(cost);
    const [price,setPrice] = useState(warning);
    return ( 
        <Form>
            <Form.Group widths={'equal'}>
                <Form.Input
                label="Price"
                type={'number'}
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                />
                <Form.Input
                label="Quantity"
                type={'number'}
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}
                />
                <Form.Input
                label="Warning Quantity"
                type={'number'}
                value={min}
                onChange={(e)=>setMin(e.target.value)}
                />
            </Form.Group>
            <Button.Group fluid>
                <Button color="red" >Delete</Button>
                <Button.Or />
                <Button positive>Update</Button>
            </Button.Group>
        </Form>
     );
}
 
export default MediceneForm;
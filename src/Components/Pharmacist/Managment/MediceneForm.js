import React, { useState } from 'react';
import { Form,Button } from 'semantic-ui-react'
import api from '../../../api';

const MediceneForm = ({getMedicene,name,amount,cost,warning}) => {
    const [quantity,setQuantity] = useState(amount);
    const [min,setMin] = useState(cost);
    const [price,setPrice] = useState(warning);
    const deleteMedicene=()=>{
        const querryParam={
            name:name      
        }
        api.deleteMedicene(querryParam)
        .then(res=>console.log(`Deleted ${name}`))
        .catch(err=>console.log("Something Went Wrong"))
        .finally(()=>getMedicene());
    }
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
                <Button color="red" onClick={deleteMedicene} >Delete</Button>
                <Button.Or />
                <Button positive>Update</Button>
            </Button.Group>
        </Form>
     );
}
 
export default MediceneForm;
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'

const AddMediciene = () => {
    const [name,setName] = useState("");
    const [price,setPrice] =useState("");
    const [quantity,setQuantity]=useState("");
    const [min,setMin]=useState("");
    const [error,setError]=useState({});
    const valid=()=>{
        const err={};
        if(name===""){
            err.name="Enter the Name oF medicene";
        }
        if(price===''){
            err.price="Enter the Price";
        }
        if(quantity===''){
            err.quantity="Enter the Quantity";
        }
        if(min===''){
            err.min="Enter the Min Price";
        }
        setError(err);
        return Object.keys(err).length===0;
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        if(valid()){
            const querryParams={
                name:name,
                price:price,
                ammount:quantity,
                min:min
            }
        }
    }
    return ( 
       <Form onChange={submitHandler}>
           <Form.Input
           label="Name"
           placeholder="Medicene Name"
           value={name}
           onChange={(e)=>setName(e.target.value)}
           />
           <Form.Group widths="equal">
                <Form.Input
                label="Price"
                placeholder="Price"
                type={'number'}
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                />
                <Form.Input
                label="Quantity"
                placeholder="Quantity"
                type={'number'}
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}
                />
                <Form.Input
                label="Warning Quantity"
                placeholder="Warning Quantity"
                type={'number'}
                value={min}
                onChange={(e)=>setMin(e.target.value)}
                />
           </Form.Group>
           <Button type='submit' fluid>Submit</Button>
       </Form>
     );
}
 
export default AddMediciene;
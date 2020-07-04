import React, { useState } from 'react';
import { Button, Form,Message } from 'semantic-ui-react'
import api from '../../../api';

const AddMediciene = () => {
    const [name,setName] = useState("");
    const [price,setPrice] =useState("");
    const [quantity,setQuantity]=useState("");
    const [min,setMin]=useState("");
    const [error,setError]=useState({});
    const [loading,setLoading]=useState(false);
    const [message,setMessage]=useState("");
    const valid=()=>{
        const err={};
        if(name===""){
            err.name="Enter the Name of medicene";
        }
        if(price===''){
            err.price="Enter the Price";
        }
        if(quantity===''){
            err.quantity="Enter the Quantity";
        }
        if(min===''){
            err.min="Enter the Warning Quantity";
        }
        setError(err);
        return Object.keys(err).length===0;
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        setLoading(true);
        if(valid()){
            console.log(error);
            const querryParams={
                name:name,
                price:price,
                amount:quantity,
                min:min
            }
            api.addMediciene(querryParams)
            .then(res=>{
                setLoading(false);
                setMessage({
                    content:"Medicene added sucessfully",
                    color:'green'
                });
            }).catch(err=>{
                setMessage({
                    content:"Something Went Wrong",
                    color:'red'
                });
                setLoading(false);
            })
        }else{
            setLoading(false);
        }
    }
    return ( 
        <>
        {message&&<Message color={message.color}>{message.content}</Message>}
       <Form onSubmit={submitHandler} loading={loading}>
           <Form.Input
           label="Name"
           placeholder="Medicene Name"
           value={name}
           onChange={(e)=>setName(e.target.value)}
           error={
               error.name?{
                   content:error.name,
                   pointing:'below'
               }:null
           }
           />
           <Form.Group widths="equal">
                <Form.Input
                label="Price"
                placeholder="Price"
                type={'number'}
                value={price}
                error={
                    error.price?{
                        content:error.price,
                        pointing:'below'
                    }:null
                }
                onChange={(e)=>setPrice(e.target.value)}
                />
                <Form.Input
                label="Quantity"
                placeholder="Quantity"
                type={'number'}
                value={quantity}
                error={
                    error.quantity?{
                        content:error.quantity,
                        pointing:'below'
                    }:null
                }
                onChange={(e)=>setQuantity(e.target.value)}
                />
                <Form.Input
                label="Warning Quantity"
                placeholder="Warning Quantity"
                type={'number'}
                value={min}
                error={
                    error.min?{
                        content:error.min,
                        pointing:'below'
                    }:null
                }
                onChange={(e)=>setMin(e.target.value)}
                />
           </Form.Group>
           <Button type='submit' fluid>Submit</Button>
       </Form>
       </>
     );
}
 
export default AddMediciene;
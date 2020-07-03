import React, { useState } from 'react';
import ResetForm from './ResetForm';
import {Message} from 'semantic-ui-react'
const ResetPage = () => {
    const [message,setMessage] = useState(null);
    return ( 
        <>
        {message&&<Message color={message.color}><h3>{message.content}</h3></Message>}
        <ResetForm setMessage={setMessage}/>
        </>
     );
}
 
export default ResetPage;
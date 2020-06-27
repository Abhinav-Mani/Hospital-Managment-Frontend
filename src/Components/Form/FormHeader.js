import React from 'react';
import {Header,Image} from 'semantic-ui-react'
const FormHeader = ({text,url}) => {
    return ( 
        <Header as='h2' color='blue' textAlign='center'>
                <Image src={url} /> 
                {text}
        </Header>
     );
}
 
export default FormHeader;
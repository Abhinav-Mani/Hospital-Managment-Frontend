import React from 'react';
import { Message,Icon} from 'semantic-ui-react'
const FormErrorMessage = ({message}) => {
    return (
        <Message  error>
           <Icon name='lock'/> 
            {message}
        </Message>
     );
}
 
export default FormErrorMessage;
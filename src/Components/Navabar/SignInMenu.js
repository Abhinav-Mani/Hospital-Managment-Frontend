import React from 'react';
import {Menu} from 'semantic-ui-react'

const SignInMenu = ({onClickHandler,activeItem}) => {
    return ( 
        <Menu.Menu position="right">
            <Menu.Item
            name='signIn'
            active={activeItem === 'signIn'}
            onClick={()=>onClickHandler('signIn')}
            />
            <Menu.Item
            name='signUp'
            active={activeItem === 'signUp'}
            onClick={()=>onClickHandler('signUp')}
                />
        </Menu.Menu>
     );
}
 
export default SignInMenu;
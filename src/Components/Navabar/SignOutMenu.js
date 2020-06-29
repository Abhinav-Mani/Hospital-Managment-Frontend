import React, { useContext } from 'react';
import {Menu} from 'semantic-ui-react';
import { AuthContext } from '../../context/AuthContextProvider';

const SignOutMenu = () => {
    const {setToken} =useContext(AuthContext);
    return ( 
        <Menu.Menu position="right">
            <Menu.Item
            name='SignOut'
            onClick={()=>setToken("")}
            />
        </Menu.Menu>
     );
}
 
export default SignOutMenu;
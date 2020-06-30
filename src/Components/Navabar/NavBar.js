import React, { useState, useContext } from 'react'
import {Menu} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContextProvider';
import SignInMenu from './SignInMenu';
import SignOutMenu from './SignOutMenu';

function NavBar(){
    const {token} = useContext(AuthContext);
    const [activeItem,setActiveItem]=useState('signIn');
    const onClickHandler=(click)=>{
        setActiveItem(click);
    }
    return (
        <div>
          {console.log(token)}
          <Redirect to={`/${activeItem}`}/>
          <Menu pointing inverted fixed={'top'} color={'blue'}>
            {!token?
            <SignInMenu 
              onClickHandler={onClickHandler} 
              activeItem={activeItem}
            />
            :<SignOutMenu/>}
          </Menu>
        </div>
      )
}
export default NavBar;
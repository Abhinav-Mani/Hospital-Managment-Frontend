import React, { useState, useContext } from 'react'
import {Menu} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContextProvider';
import SignInMenu from './SignInMenu';
import SignOutMenu from './SignOutMenu';

function NavBar(){
    const {token} = useContext(AuthContext);
    const [activeItem,setActiveItem]=useState('home');
    const onClickHandler=(click)=>{
        setActiveItem(click);
    }
    return (
        <div>
          {console.log(token)}
          <Redirect to={`/${activeItem}`}/>
          <Menu pointing inverted fixed={'top'} color={'blue'}>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={()=>onClickHandler('home')}
            />
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
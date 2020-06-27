import React, { useState } from 'react'
import {Menu} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

function NavBar(){
    const [activeItem,setActiveItem]=useState('home');
    const onClickHandler=(click)=>{
        setActiveItem(click);
    }
    return (
        <div>
          <Redirect to={`/${activeItem}`}/>
          <Menu pointing inverted fixed={'top'} color={'blue'}>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={()=>onClickHandler('home')}
            />
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
          </Menu>
  
        </div>
      )
}
export default NavBar;
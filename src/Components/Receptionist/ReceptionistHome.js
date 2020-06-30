import React, { useState } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import RegisterForm from './RegisterForm';

const ReceptionistHome = () => {
    const [activeItem,setActiveItem]=useState('register');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    return ( 
        <Grid style={{height:'100vh',marginLeft:40,marginRight:40}}>
        <Grid.Column width={4} style={{marginTop:50}}>
          <Menu fluid vertical tabular color={'blue'} fixed>
            <Menu.Item
              name='register'
              active={activeItem === 'register'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='search'
              active={activeItem === 'search'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='appointment'
              active={activeItem === 'appointment'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='reset'
              active={activeItem === 'reset'}
              onClick={handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12} style={{marginTop:50}}>
          <Segment>
            {activeItem === 'register'&&<RegisterForm/>}
          </Segment>
        </Grid.Column>
      </Grid>
     );
}
 
export default ReceptionistHome;
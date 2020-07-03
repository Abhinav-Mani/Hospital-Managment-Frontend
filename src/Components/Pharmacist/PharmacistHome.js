import React,{useState} from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react'

const PharmacistHome = () => {
    const [activeItem,setActiveItem]=useState('add remove');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    return ( 
        <Grid style={{height:'100vh',marginLeft:40,marginRight:40}}>
        <Grid.Column width={4} style={{marginTop:50}}>
          <Menu fluid vertical tabular color={'blue'} >
            <Menu.Item
              name='add remove'
              active={activeItem === 'add remove'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='quantity'
              active={activeItem === 'quantity'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='billing'
              active={activeItem === 'billing'}
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
          </Segment>
        </Grid.Column>
      </Grid>
     );
}
 
export default PharmacistHome;
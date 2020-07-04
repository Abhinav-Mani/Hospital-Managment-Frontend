import React,{useState} from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import ResetPage from '../Receptionist/Reset/ResetPage';
import AddMediciene from './AddMediciene/AddMediciene';
import ManagmentHome from './Managment/Managment';

const PharmacistHome = () => {
    const [activeItem,setActiveItem]=useState('add');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    return ( 
        <Grid style={{height:'100vh',marginLeft:40,marginRight:40}}>
        <Grid.Column width={4} style={{marginTop:50}}>
          <Menu fluid vertical tabular color={'blue'} >
            <Menu.Item
              name='add'
              active={activeItem === 'add'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Managment'
              active={activeItem === 'Managment'}
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
            {activeItem==='add'&&<AddMediciene/>}
            {activeItem==='Managment'&&<ManagmentHome/>}
            {activeItem==='reset'&&<ResetPage/>}
          </Segment>
        </Grid.Column>
      </Grid>
     );
}
 
export default PharmacistHome;
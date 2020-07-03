import React,{useState} from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import ResetPage from '../Receptionist/Reset/ResetPage';

const DoctorHome = () => {
    const [activeItem,setActiveItem]=useState('appointment');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    return ( 
        <Grid style={{height:'100vh',marginLeft:40,marginRight:40}}>
        <Grid.Column width={4} style={{marginTop:50}}>
          <Menu fluid vertical tabular color={'blue'} >
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
              {activeItem==='reset'&&<ResetPage/>}
          </Segment>
        </Grid.Column>
      </Grid>
     );
}
 
export default DoctorHome;
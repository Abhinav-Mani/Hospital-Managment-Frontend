import React, { useEffect, useState } from 'react';
import { List } from 'semantic-ui-react'
import api from '../../../api';
import MediceneForm from './MediceneForm';

const ManagmentHome = () => {
    const [medicines,setMedicience] = useState([]);
    useEffect(()=>{
        api.getMedicene()
        .then(res=>{
            console.log(res);
            setMedicience(res);
        })
        .catch(err=>console.log(err));
    },[])
    return ( 
        <>
            <List divided relaxed>
                {
                    medicines.map(medicine=>(
                        <List.Item key={medicine[0]}>
                            <List.Content>
                                <List.Header>
                                    {medicine[0]}
                                </List.Header>
                                <List.Content>
                                    <MediceneForm 
                                    amount={medicine[1]} 
                                    cost={medicine[1]} 
                                    warning={medicine[2]} />
                                </List.Content>
                            </List.Content>
                        </List.Item>
                    ))
                }
            </List>
        </>
     );
}
 
export default ManagmentHome;
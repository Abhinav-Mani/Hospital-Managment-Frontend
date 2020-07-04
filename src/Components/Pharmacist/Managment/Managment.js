import React, { useEffect, useState } from 'react';
import { List } from 'semantic-ui-react'
import api from '../../../api';
import MediceneForm from './MediceneForm';

const ManagmentHome = () => {
    const [medicines,setMedicience] = useState([]);
    const GetMedicine=()=>{
        api.getMedicene()
        .then(res=>{
            console.log(res);
            setMedicience(res);
        })
        .catch(err=>console.log(err));
    }
    useEffect(()=>GetMedicine(),[])
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
                                    name={medicine[0]}
                                    amount={medicine[1]} 
                                    cost={medicine[1]} 
                                    warning={medicine[2]}
                                    getMedicene={GetMedicine} />
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
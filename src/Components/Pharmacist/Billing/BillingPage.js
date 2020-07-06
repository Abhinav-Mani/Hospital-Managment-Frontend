import React from 'react';
import { Button, List ,Card} from 'semantic-ui-react'
import api from '../../../api';

const BillingPage = ({prescriptions,updated,setUpdated}) => {
    const onClickHandler=(presc)=>{
        let querryParama={
            id:presc[3],
            mediciene:presc[1]
        }
        api.doBilling(querryParama)
        .then(res=>setUpdated(!updated))
        .catch(err=>console.log(err))
    }
    return ( 
        <List divided verticalAlign='middle'>
            
            {
                prescriptions.map(prescription=>(
                    <Card color={prescription[2]==0?'green':"black"} fluid>
                    <List.Item key={prescription[1]}>
                        <List.Content floated='right'>
                            {console.log(prescription[2]+" "+prescription[11])}
                            <Button onClick={()=>onClickHandler(prescription)} disabled={prescription[2]!==0||prescription[11]===0} >Buy</Button>
                        </List.Content>
                        <List.Content>{prescription[1]}({prescription[12]})</List.Content>
                    </List.Item>
                    </Card>
                ))
            }
        </List>
     );
}
 
export default BillingPage;
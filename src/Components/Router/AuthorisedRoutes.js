import React from 'react';
import {Switch,Route} from "react-router-dom";
import ReceptionistHome from '../Receptionist/ReceptionistHome';
import DoctorHome from '../Doctor/DoctorHome';
import PharmacistHome from '../Pharmacist/PharmacistHome';
const AuthorisedRoutes = () => {
    return ( 
        <Switch>
            <Route path={"/doctor"} >
                <DoctorHome/>
            </Route>
            <Route path={"/receptionist"} >
                <ReceptionistHome/>
            </Route>
            <Route path={"/pharmacist"} >
                <PharmacistHome/>
            </Route>
        </Switch>
     );
}
 
export default AuthorisedRoutes;
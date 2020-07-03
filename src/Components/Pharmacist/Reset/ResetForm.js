import React, { useState, useContext } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { AuthContext } from '../../../context/AuthContextProvider';
import JwtDecode from 'jwt-decode';
import api from '../../../api';

const ResetForm = ({setMessage}) => {
    const {token} = useContext(AuthContext);
    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confirmPassword,setConfirmPassword] =useState("");
    const [loading,setLoading]=useState(false)
    const SubmitHandler=(e)=>{
        e.preventDefault();
        setLoading(true);
        const user=JwtDecode(token);
        let querryParams={
            username:user.user,
            oldpassword:oldPassword,
            newpassword:newPassword,
            possition:user.post
        }
        if(newPassword===confirmPassword){
            api.resetPassword(querryParams)
            .then(res=>{
                setMessage({color:'green',content:"Sucessfully changed password"})
                setLoading(false);
            }
            )
            .catch(err=>{
                if(!err.response){
                    setMessage({color:'red',content:"Connection Time Out"})
                    setLoading(false);
                }else if (err.response.status) {
                    setMessage({color:'red',content:"Wrong Password"});
                    setLoading(false);
                  return;
                }
                return console.log(err)
            });
        }else{
            setMessage({color:'red',content:"Password did not match"});
            setLoading(false);
        }
        console.log(user);
    }
    return ( 
        <Form loading={loading} onSubmit={SubmitHandler}>
            <Form.Input
            label="Old Password"
            placeholder="Old Password"
            value={oldPassword}
            input={'password'}
            onChange={e=>setOldPassword(e.target.value)}
            />
            <Form.Input
            label="New Password"
            placeholder="New Password"
            value={newPassword}
            input={'password'}
            onChange={e=>setNewPassword(e.target.value)}
            />
            <Form.Input
            label="Confirm New Password"
            placeholder="New Password "
            value={confirmPassword}
            input={'password'}
            onChange={e=>setConfirmPassword(e.target.value)}
            />
            <Button type='submit' fluid>Reset Password</Button>
        </Form>
     );
}
 
export default ResetForm;
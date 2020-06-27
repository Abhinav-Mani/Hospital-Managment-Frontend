import React from 'react'
import { Segment,Grid} from 'semantic-ui-react'
import FormHeader from './FormHeader'
import SignInForm from './SignInForm';
const text="Log-in to your account";
const url='https://cdn4.iconfinder.com/data/icons/professions-1-2/151/3-512.png'
const SignInPage = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Segment >
        <FormHeader text={text} url={url}/>
        <SignInForm/>
    </Segment>
    </Grid.Column>
    </Grid>
)

export default SignInPage
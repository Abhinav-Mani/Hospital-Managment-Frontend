import React from 'react'
import { Segment,Grid} from 'semantic-ui-react'
import FormHeader from './FormHeader'
import SignUpForm from './SignUpForm';
const text="Create an account";
const url='https://cdn4.iconfinder.com/data/icons/professions-1-2/151/3-512.png'
const SignInPage = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Segment >
        <FormHeader text={text} url={url}/>
        <SignUpForm/>
    </Segment>
    </Grid.Column>
    </Grid>
)

export default SignInPage
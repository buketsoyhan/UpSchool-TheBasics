import { useContext, useState } from "react"
import { AuthLoginCommand, LocalJwt } from "../types/AuthTypes"
import { Button, Form, Grid, Header, Icon, Segment, Image } from "semantic-ui-react"
import axios from "axios"
import { getClaimsFromJwt } from "../utils/jwtHelper"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { AppUserContext } from "../context/StateContext"

function LoginPage() {

    const {setAppUser}=useContext(AppUserContext)

    const navigate=useNavigate();

    const [authLoginCommand, setAuthLoginCommand] = useState<AuthLoginCommand>({ email: "", password: "" })

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const BASE_URL=import.meta.env.VITE_API_URL;
        const LOGIN_URL=`${BASE_URL}/Authentication/login`;
        const response = await axios.post("https://localhost:7109/api/Authentication/Login", authLoginCommand);

        console.log(response)
        if (response.status === 200) {
            const accessToken = response.data.accessToken;
            const { uid,
                email,
                given_name,
                family_name,
            } = getClaimsFromJwt(accessToken)

            const expires:string=response.data.expires;

            setAppUser({
                id: uid,
                email,
                firstName: given_name,
                lastName: family_name,
                expires,
                accessToken
            })

            const localJwt:LocalJwt={
                accessToken,
                expires
            }

            localStorage.setItem("upstorage_user", JSON.stringify(localJwt));
            navigate("/")
        }
        else{
            toast.error(response.statusText)
        }
    }
    const handleInputChange = (inputName: string, inputValue: string) => {
        if (inputName == "email") setAuthLoginCommand({ ...authLoginCommand, email: inputValue })

        else
            setAuthLoginCommand({ ...authLoginCommand, password: inputValue })

        console.log(authLoginCommand);

    }
    const onGoogleLoginClick = (e: React.FormEvent) => {
        // Handle Google login
        e.preventDefault();

    };

    return (
        <Grid textAlign='center' style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Image src='/upstorage_logo_730_608.png' size='medium' centered style={{ marginTop: '1em' }} />
                <Header as='h2' color='teal' textAlign='center'>
                    Log-in to your account
                </Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='mail'
                            iconPosition='left'
                            placeholder='Email'
                            value={authLoginCommand.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={authLoginCommand.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                        />

                        <Button color='teal' fluid size='large' type="submit">
                            Login
                        </Button>

                        <Button color='red' fluid onClick={(e) => onGoogleLoginClick(e)} size='large' style={{ marginTop: "5px" }}>
                            <Icon name='google' /> Sign in with Google
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
}

export default LoginPage
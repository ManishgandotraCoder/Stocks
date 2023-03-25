import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./login.scss"
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import * as userActions from "./../../../redux/actions/user.actions"
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';


const theme = createTheme();

export default function SignInSide() {
    const userInfo: any = useSelector((user: any) => user.user)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [error, setError] = React.useState(false)
    const [emailID, setEmailId] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loader , setLoader]= React.useState(false)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setError(true)
        setLoader(true)
        event.preventDefault();
        dispatch(await userActions.authenticate(emailID, password))
        setLoader(false)
    };
    React.useEffect(() => {
        if (userInfo.loginMessage === "User login successfully") {
            localStorage.setItem('user', JSON.stringify(userInfo?.userInformation));
            window.location.href = '/'
        }

    }, [userInfo.loginMessage])
    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("rgb(21, 136, 243)"),
        backgroundColor: "rgb(21, 136, 243)",
        '&:hover': {
            backgroundColor: "rgb(21, 136, 243)",
        },
    }));
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: 'calc(100vh )' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://img.etimg.com/thumb/msid-89705853,width-650,height-488,imgsize-44124,,resizemode-75/crypto.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            mt: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                onChange={(e) => setEmailId(e.target.value)}
                                value={emailID}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                error={emailID ? false : error}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                error={password ? false : error}
                                autoComplete="current-password"
                            />
                            <ColorButton
                                type="submit"
                                onClick={() => handleSubmit}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </ColorButton>
                            <Typography style={userInfo?.loginMessage === "User login successfully" ? { color: "black " } : { color: "red" }}>{userInfo?.loginMessage}</Typography>
                            {loader ? <CircularProgress className='progress' color="inherit"/> :""}
                            <Grid container>
                                {/* <Grid item xs>
                                    
                                </Grid> */}
                                <Grid >
                                    {/* <Link className='link' onClick={() => navigate('/sign-up')} variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link> */}
                                </Grid>

                                {/* ::::::::: {JSON.stringify(userInfo?.loginMessage)} */}

                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
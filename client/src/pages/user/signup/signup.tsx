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
import "./signup.scss"
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';


const theme = createTheme();

export default function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = React.useState(false)
    const [emailID, setEmailId] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name , setName ] = React.useState('')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setError(true)
        event.preventDefault();
        console.log(emailID, password);
    };
    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("#FD0560"),
        backgroundColor: "#FD0560",
        '&:hover': {
            backgroundColor: "#FD0560",
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
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                size="small"
                                error={name ? false : error}
                            />
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
                                size="small"
                                error={emailID ? false : error}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                size="small"
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

                            <Grid container>
                                <Grid item xs>
                                {/* <Link onClick={() => navigate('/forgot-password')} variant="body2">
                                        Forgot password?
                                    </Link> */}
                                </Grid>
                                <Grid item>
                                    <Link onClick={() => navigate('/sign-up')} variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
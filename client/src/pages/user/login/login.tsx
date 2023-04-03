import * as React from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./login.scss"
import * as userActions from "./../../../redux/actions/user.actions"
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { Button, Form, Input, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';

const theme = createTheme();

export default function SignInSide() {
    const userInfo: any = useSelector((user: any) => user.user)
    const dispatch = useDispatch();
    const [emailID, setEmailId] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loader, setLoader] = React.useState(false);
    const formRef = React.useRef<FormInstance>(null);


    const tailLayout = {
        wrapperCol: { offset: 0, span: 24 },
    };

    React.useEffect(() => {
        if (userInfo.loginMessage === "User login successfully") {
            localStorage.setItem('user', JSON.stringify(userInfo?.userInformation));
            window.location.href = '/'
        }

    }, [userInfo.loginMessage])

    const onFinish = async (values: any) => {
        setLoader(true)
        dispatch(await userActions.authenticate(values.email, values.password))
        setLoader(false)
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: 'calc(100vh)' }} >
                {/* <CssBaseline /> */}
                <Grid style={{ backgroundColor: "#000" }}
                    item
                    // xs={false}
                    // sm={4}
                    // // p={50 }
                    md={5}
                    // mt={10}
                    sx={{
                        backgroundImage: 'url(https://www.tradesmarter.com/images/tradesmarter-trading-software.png)',
                        backgroundRepeat: 'no-repeat',
                        // backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={7} mt={20}  >
                    <center><span className='sign'>Sign In</span></center>
                    <Form
                        ref={formRef}
                        name="control-ref"
                        onFinish={onFinish}
                        style={{  marginLeft: "10%", marginRight: "10%" }}
                    >
                        <Form.Item name="email" rules={[{ required: true }]}>
                            <Input
                                placeholder='Email ID'
                                type='email'
                                size='large'
                                onChange={(e: any) => setEmailId(e.target.value)}
                                value={emailID} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, min: 6 }]}>
                            <Input
                                placeholder='Password'
                                type='password'
                                size='large'
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                            />
                        </Form.Item>
                        {loader ? <CircularProgress className='progress' color="inherit" /> : ""}

                        <Form.Item {...tailLayout}>
                            <Button type="primary" style={{ width: '100%', height: "40px" }} htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
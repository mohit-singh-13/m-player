import React, { useRef, useState } from 'react'
import { SearchPage } from './SearchPage'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { authentication } from '../services/api-client';

export const LandingPage = () => {
    const [flag, setFlag] = useState(false);
    const [register, setRegister] = useState(false);
    
    const setFlagFn = (flag) => {
        setFlag(flag);
    }
    const setRegisterFn = (register) => {
        setRegister(register);
    }


    const [message, setMessage] = useState('');

    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();

    const doRegister = async () => {
        const userInfo = {
            "name":nameRef.current.value,
            "email":emailRef.current.value,
            "password":passwordRef.current.value
        }
        try {
            const response = await authentication.post('http://localhost:3001/register', userInfo);
            setMessage(response.data.message);
            console.log("Response is ", response);
            console.log("User info ", userInfo);
        }
        catch(err) {
            setMessage("Register failed ...");
            console.log("Error ", err);
        }
    }

    const doLogin = async () => {
        const userInfo = {
            "email":emailRef.current.value,
            "password":passwordRef.current.value
        }
        try {
            const response = await authentication.post('http://localhost:3001/login', userInfo);
            setMessage(response.data.message);
            console.log("Response is ", response);
            console.log("User info ", userInfo);
            if (response.data.flag === "true") {
                var delayInMilliseconds = 1500; //1.5 second

                setTimeout(() => {
                    setFlagFn(true);
                }, delayInMilliseconds);
            }
        }
        catch(err) {
            setMessage("Login failed ...");
            console.log("Error ", err);
        }
    }


    const jsx = <>
        <AppBar position="static">
            <Toolbar className="myAppBar">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 7 }}
                >
                </IconButton>
                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }} className="text-center display-1">
                    M-Player
                </Typography>
                <Button variant="contained" color="success" size="large" onClick={() => {
                    setRegisterFn(true);
                }}>Register</Button> 
            </Toolbar>
            <Typography variant='h4'>{message}</Typography>
        </AppBar>

        <div className="txt-pwd-field">
            <TextField id="loginEmail" label="Email" variant="filled" inputRef={emailRef}/>
            <TextField id="loginPassword" label="Password" type="password" autoComplete="current-password" variant="filled" inputRef={passwordRef}/>
            <Button variant="contained" color="secondary" size="large" onClick={doLogin}>Login</Button>
        </div>
    </>

    const jsx2 = <>
        <AppBar position="static">
            <Toolbar className="myAppBar">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 7 }}
                >
                </IconButton>
                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }} className="text-center display-1">
                    M-Player
                </Typography>
                <Button variant="contained" color="success" size="large" onClick={() => {
                    setRegisterFn(false);
                }}>Login</Button> 
            </Toolbar>
            <Typography variant='h4'>{message}</Typography>
        </AppBar>

        <div className="txt-pwd-field">
            <TextField id="registerName" label="Name" variant="filled" inputRef={nameRef}/>
            <TextField id="registerEmail" label="Email" variant="filled" inputRef={emailRef}/>
            <TextField id="registerPassword" label="Password" type="password" autoComplete="current-password" variant="filled" inputRef={passwordRef}/>
            <Button variant="contained" color="secondary" size="large" onClick={doRegister}>Register</Button>
        </div>
    </>

    return (
        <>
          {flag ? <SearchPage setFlagFn={setFlagFn} setMessage={setMessage}/> : register ? jsx2 : jsx}
        </>
    );
}

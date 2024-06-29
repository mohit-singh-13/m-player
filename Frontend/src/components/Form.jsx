import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { fetchData } from '../utils/fetchData';
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Form = ({ flag, btn }) => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const { setLogin, navigation } = useContext(AppContext);

    const clickHandler = async () => {

        if (flag) {
            if (formData.password !== formData.confirmPassword) {
                toast.error("Passwords don't match", {
                    style: {
                        background: "black",
                        color: "white",
                    }   
                });
                return;
            }
            if (formData.name == "" || formData.email == "" || formData.password == "") {
                toast.error("Please fill all the fields carefully", {
                    style: {
                        background: "black",
                        color: "white",
                    }   
                });
                return;
            }
        }

        const response = await fetchData(formData, btn);

        if (!flag && response?.success) {
            setLogin(true);

            toast.success(response.message, {
                style: {
                    background: "black",
                    color: "white",
                }  
            });
            
            navigation("/");
        } else if (!flag) {
            toast.error(response.message, {
                style: {
                    background: "black",
                    color: "white",
                }  
            });
        }

        if (flag && response?.success) {
            toast.success(response.message, {
                style: {
                    background: "black",
                    color: "white",
                }
            });

            setFormData({name: "", email: "", password: "", confirmPassword: ""});
        } else if (flag) {
            toast.error(response.message, {
                style: {
                    background: "black",
                    color: "white",
                }  
            });
        }
    }

    const keyDownHandler = (event) => {
        if (event.key == "Enter") {
            event.preventDefault();
            clickHandler();
        }
    }

    return (
        <div className="w-11/12 max-w-[650px] mx-auto flex flex-col h-[70vh] justify-center gap-[1rem]">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '500', maxWidth: '97%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='w-full'>
                    {
                        flag &&
                        <TextField
                            required
                            id="outlined-required name"
                            label="Name"
                            fullWidth
                            onChange={changeHandler}
                            name="name"
                            onKeyDown={keyDownHandler}
                            value={formData.name}
                        />
                    }
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required email"
                        label="Email"
                        fullWidth
                        onChange={changeHandler}
                        name="email"
                        onKeyDown={keyDownHandler}
                        value={formData.email}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required password"
                        label="Password"
                        fullWidth
                        onChange={changeHandler}
                        name="password"
                        type="password"
                        autoComplete=''
                        onKeyDown={keyDownHandler}
                        value={formData.password}
                    />
                </div>
                <div>
                    {
                        flag &&
                        <TextField
                            required
                            id="outlined-required cpassword"
                            label="Confirm Password"
                            fullWidth
                            onChange={changeHandler}
                            name="confirmPassword"
                            type="password"
                            autoComplete=''
                            onKeyDown={keyDownHandler}
                            value={formData.confirmPassword}
                        />
                    }
                </div>
            </Box>
            <div className='flex flex-col'>
                <Button variant="contained" onClick={clickHandler} size="large">{btn}</Button>
            </div>
        </div>
    )
}

export default Form
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

        if (flag && formData.password !== formData.confirmPassword) {
            toast.error("Passwords don't match", {
                style: {
                    background: "black",
                    color: "white",
                }   
            });
            return;
        }

        const response = await fetchData(formData, btn);

        if (!flag && response?.success) {
            setLogin(true);

            navigation("/");
        }
    }

    return (
        <div className="w-[650px] mx-auto border flex flex-col">
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
                        />
                    }
                </div>
            </Box>
            <Button variant="contained" onClick={clickHandler}>{btn}</Button>
        </div>
    )
}

export default Form
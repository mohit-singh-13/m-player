import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import axios from 'axios';

const Navbar = ({btn}) => {
    const {navigation, setTerm, setLogin} = useContext(AppContext);

    const clickHandler = async() => {
        if (btn == "logout") {
            setLogin(false);
            toast.success("You're logged out successfully", {
                style: {
                    background: "black",
                    color: "white",
                }
            });

            const URL = import.meta.env.VITE_LOGOUT_URL;

            const response = await axios.get(URL, {
                withCredentials: true
            });

            if (response?.data?.success) {
                navigation("/login");
            }
        } else {
            navigation(`/${btn.toLowerCase()}`)
        }
    }

    const navHandler = () => {
        setTerm("Latest Songs");
        navigation("/");
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color=''>
                    <Toolbar className=' bg-[#3f51b5] text-white'>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} align='center' m={3} onClick={navHandler} className='cursor-pointer'>
                            M-PLAYER
                        </Typography>
                        {
                            btn &&
                            <button onClick={clickHandler} className='px-[20px] py-[10px] rounded-md uppercase bg-white font-semibold text-[#3f51b5] border-solid border-[1px] border-[#3f51b5] hover:bg-[#3f51b5] hover:text-white transition-all duration-200 max-sm:px-[10px] max-sm:py-[5px] max-sm:text-[0.6rem]'>{btn}</button>

                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar
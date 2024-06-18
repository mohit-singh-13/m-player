import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = ({btn}) => {

    const {navigation} = useContext(AppContext);

    const clickHandler = () => {
        navigation(`/${btn.toLowerCase()}`)
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color=''>
                    <Toolbar>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} align='center' m={2}>
                            M-PLAYER
                        </Typography>
                        <Button color="inherit" onClick={clickHandler}>{btn}</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar
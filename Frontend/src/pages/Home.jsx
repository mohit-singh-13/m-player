import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../context/AppContext"
import { fetchSongs } from "../utils/fetchData";
import Navbar from "../components/Navbar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Cards from "../components/Cards";
import Spinner from "../components/Spinner";
import axios from "axios";

const Home = () => {
    const { login, navigation, term, setTerm, setLogin } = useContext(AppContext);

    const [loadCards, setLoadCards] = useState(false);

    const [allSongs, setAllSongs] = useState([]);

    const authenticate = async() => {
        const URL = import.meta.env.VITE_AUTHENTICATE_URL;
        
        const token = document.cookie.substring(6);

        const response = await axios.get(URL, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (response?.data?.success) {
            setLogin(true);

            fetchingSongs();
        } else {
            navigation("/login");
        }
    }

    useEffect(() => {
        authenticate();
    }, [term, login]);

    const fetchingSongs = async () => {
        setLoadCards(false);

        const response = await fetchSongs(term);

        setAllSongs(response.results);

        setLoadCards(true);
    }

    const searchData = useRef();

    const clickHandler = () => {
        setTerm(searchData.current.value);
    }

    const keyDownHandler = (event) => {
        if(event.key == 'Enter') {
            event.preventDefault();
            setTerm(searchData.current.value);
        }
    }

    return (
        <div className="flex flex-col gap-5 bg-[#f5f5f5] text-[#212121] h-max">
            <div>
                <Navbar btn={"logout"} />
            </div>

            <div className="w-11/12 max-w-[1300px] mx-auto">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '500', maxWidth: "91%" },
                    }}
                    noValidate
                    autoComplete="off"
                    className="flex"
                >
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                        fullWidth
                        name="search"
                        inputRef={searchData}
                        onKeyDown={keyDownHandler} />

                    <Button variant="contained" size="large" onClick={clickHandler}>Search</Button>
                </Box>
            </div>

            <div>
                {
                    loadCards &&
                    <Cards songs={allSongs} />
                }
                {
                    !loadCards &&
                    <div className="h-screen flex justify-center items-center">
                        <Spinner />
                    </div>
                }
            </div>

        </div>
    )
}

export default Home
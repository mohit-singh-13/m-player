import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs"
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";
import Button from '@mui/material/Button';

export const SearchPage = ({setFlagFn, setMessage}) => {
    const [allSongs, setSongs] = useState([]);

    const loadSongs = async () => {
        setSongs(await getSongs('Latest Songs'));
    }

    useEffect(() => {
        loadSongs();
    }, [])

    const getArtistName = async (artistName) => {
        console.log("Received artist name", artistName);
        setSongs(await getSongs(artistName));
    }

    const [flag, setFlag] = useState(false);

    const [song, setPlayerSong] = useState(null);

    const toggleFlag = (flag, songarg) => {
        setPlayerSong(songarg);
        setFlag(flag);
    }

    const jsx = <>
        <Search fnGetArtistName={getArtistName}/>
        <Songs fn={toggleFlag} allsongs={allSongs}/>
    </>

    return (
        <div className="container">
            <h1 className="text-center display-1 m-player-heading">M-Player</h1>
            <Button variant="contained" color="error" size="large" onClick={() => {
                setMessage('');
                setFlagFn(false);
            }}>Logout</Button>
            <br/>
            <br/>
            {flag ? <Player song={song} toggle={toggleFlag}/> : jsx}
        </div>
    );
}
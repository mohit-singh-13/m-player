import { useRef } from "react";

export const Search = ({fnGetArtistName}) => {
    const artist = useRef();

    return (
        <>
            <label htmlFor="search">Artist Name</label>
            <input type="text" placeholder="Type by Artist Name" className="form-control" id="search" ref={artist}/>
            <button className="btn btn-primary" onClick={() => {
                fnGetArtistName(artist.current.value);
            }}>Search</button>
            <br/>
            <br/>
        </>);
}
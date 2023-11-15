import { Song } from "./Song";

export const Songs = ({fn, allsongs}) => {
    return (
        <div className="music-container">
            {allsongs.map((currentSongs, index) =>
                <Song key={index} song={currentSongs} fn={fn}/>
            )}
        </div>
    )
}
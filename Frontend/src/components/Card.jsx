import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Card = ({song}) => {

    const poster = song.artworkUrl100;
    const songName = song.trackCensoredName;

    const {navigation, setSong} = useContext(AppContext);
    
    const playHandler = () => {
        setSong(song);
        navigation("/player");
    }

    return (
        <div className="flex justify-between items-center hover:scale-[1.04] px-5 py-3 transition-all duration-200 hover:bg-white rounded-lg shadow-md font-nigerian font-thin max-sm:gap-[3rem]">
            <div>
                <img src={poster} alt="Poster of song" className="rounded-[100%] border-2 border-black mr-[20px]" />
            </div>

            <div>
                <p className="font-bold text-[1.2rem] max-sm:w-10/12 max-sm:text-center">{songName}</p>
            </div>

            <div>
                <button className="font-bold bg-[#ffeb3b] border-none px-[20px] py-[10px] rounded-md hover:bg-[#ffc107] transition-all duration-200 text-[#212121] max-sm:px-[25px] max-sm:py-[5px] max-sm:text-[1rem]" onClick={playHandler}>Play Song</button>
            </div>
        </div>
    )
}

export default Card
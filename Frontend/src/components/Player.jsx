import { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import Navbar from "./Navbar";

const Player = () => {

    const { song, navigation, login, setTerm, term } = useContext(AppContext);

    useEffect(() => {
        if (!login) {
            navigation("/login");
        }
    })


    const songUrl = song?.previewUrl;
    const songName = song?.trackCensoredName;
    const songImg = song?.artworkUrl100;

    const backHandler = () => {
        setTerm(`${term}`)
        navigation("/");
    }

    return (
        <div className="h-screen flex flex-col bg-[#f5f5f5]">

            <div>
                <Navbar />
            </div>

            <div>
                <button className="font-bold bg-[#ffeb3b] border-none px-[20px] py-[10px] rounded-md hover:bg-[#ffc107] transition-all duration-200 text-[#212121] m-4" onClick={backHandler}>Back</button>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <div className="text-center mt-8 flex flex-col gap-3 font-nigerian">
                    <img src={songImg} alt="Song thumbnail" width={250} />
                    <p className="font-bold underline capitalize">{songName}</p>
                </div>

                <div>
                    <audio controls>
                        <source src={songUrl} type='audio/mp4' />
                    </audio>
                </div>
            </div>
        </div>
    )
}

export default Player
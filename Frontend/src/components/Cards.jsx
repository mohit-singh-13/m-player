import toast from "react-hot-toast";
import Card from "./Card";
import { useEffect } from "react";

const Cards = ({songs}) => {

    useEffect(() => {
        if (songs.length === 0) {
            toast.error("No Songs available for the searched term", {
                style: {
                    background: "black",
                    color: "white",
                }
            });
            return;
        }
    }, [songs]);

    return (
        <div className="w-11/12 max-w-[1280px] flex flex-col mx-auto gap-2 bg-[#f7f1f1] mb-12">
        {
            songs.map((song, index) => {
                return (<Card song={song} key={index} />)
            })
        }
        </div>
    )
}

export default Cards
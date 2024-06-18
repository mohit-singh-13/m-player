import { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"

const Home = () => {

    const { login, navigation } = useContext(AppContext);
    // console.log(token);    

    useEffect(() => {
        if (!login) {
            navigation("/login");
        }
    }, [login])

    return (
        <div>
            <div>
                M-Player
            </div>


        </div>
    )
}

export default Home
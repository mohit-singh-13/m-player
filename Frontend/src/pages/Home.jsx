import { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import axios from "axios";

const Home = () => {

    const { login, navigation } = useContext(AppContext);
    // console.log(token);    

    useEffect(() => {
        const authenticate = async() => {
            try {
                const URL = import.meta.env.VITE_AUTH_URL;
                console.log(URL);
        
                const response = await axios.post(URL, {
                    withCredentials: true,
                });

                // const data = await response.json();
                console.log(response)
        
            } catch(err) {
                console.log("Error in token identification");
            }
        }

        authenticate();
        
        if (!login) {
            navigation("/login");
        }
    })

    
    // useEffect(() => {
    //     if (!login) {
    //         navigation("/login");
    //     }
    // }, [login])

    return (
        <div>
            <div>
                M-Player
            </div>


        </div>
    )
}

export default Home
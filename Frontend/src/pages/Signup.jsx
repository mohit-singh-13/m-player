import { useContext, useEffect } from "react"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import { AppContext } from "../context/AppContext"
import authenticate from "../utils/authenticate"

const Signup = () => {

    const { btn, setBtn, navigation } = useContext(AppContext);

    useEffect(() => {
        async function authentication() {
            if (await authenticate()) {
                setBtn("signup");
            } else {
                navigation("/");
            }
        }

        authentication();
    }, [btn]);

    return (
        <div>
            <div>
                <Navbar btn="Login" />
            </div>

            <div>
                <Form flag={true} btn={btn} />
            </div>

        </div>
    )
}

export default Signup
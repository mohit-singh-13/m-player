import { useContext, useEffect } from "react"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import { AppContext } from "../context/AppContext"
import authenticate from "../utils/authenticate"

const Login = () => {

    const { btn, setBtn, navigation } = useContext(AppContext);

    useEffect(() => {
        async function authentication() {
            if (await authenticate()) {
                setBtn("login");
            } else {
                navigation("/");
            }
        }

        authentication();

    }, [btn]);

    return (
        <div>
            <div>
                <Navbar btn="Signup" />
            </div>

            <div>
                <Form flag={false} btn={btn} />
            </div>
        </div>
    )
}

export default Login
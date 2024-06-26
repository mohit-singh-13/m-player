import { useContext, useEffect } from "react"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import { AppContext } from "../context/AppContext"

const Login = () => {

    const { btn, setBtn, navigation } = useContext(AppContext);

    useEffect(() => {
        if (document.cookie.substring(6) === "") {
            setBtn("login");
        } else {
            navigation("/");
        }

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
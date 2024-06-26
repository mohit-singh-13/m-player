import { useContext, useEffect } from "react"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import { AppContext } from "../context/AppContext"

const Signup = () => {

    const { btn, setBtn, navigation } = useContext(AppContext);

    useEffect(() => {
        if (document.cookie.substring(6) === "") {
            setBtn("signup");
        } else {
            navigation("/");
        }
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
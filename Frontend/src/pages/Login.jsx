import { useContext, useEffect } from "react"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import { AppContext } from "../context/AppContext"

const Login = () => {

    const { btn, setBtn } = useContext(AppContext);

    useEffect(() => {
        setBtn("login");
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
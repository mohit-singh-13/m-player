import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>

            <Toaster position="top-left" containerStyle={{
                top: "20px",
                fontSize: "1.2rem",
            }} />
        </div>
    );
}

export default App
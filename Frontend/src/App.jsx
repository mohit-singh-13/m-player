import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Player from "./components/Player";

const App = () => {

    return (
        <div className="overflow-x-hidden h-screen">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/player" element={<Player />} />
            </Routes>

            <Toaster position="top-left" containerStyle={{
                top: "20px",
                fontSize: "1.1rem",
            }} />
        </div>
    );
}

export default App
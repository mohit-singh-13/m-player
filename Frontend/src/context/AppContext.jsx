import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [login, setLogin] = useState(false);
    const [btn, setBtn] = useState("");
    const navigation = useNavigate(null);
    const [song, setSong] = useState({});
    const [term, setTerm] = useState("Latest Songs");

    const value = {
        login,
        setLogin,
        btn,
        setBtn,
        navigation,
        song,
        setSong,
        term,
        setTerm
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider
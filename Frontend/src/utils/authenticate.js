import axios from "axios";

const authenticate = async() => {
    const URL = import.meta.env.VITE_AUTHENTICATE_URL;

    const response = await axios.get(URL, {
        withCredentials: true
    });

    return response?.data?.success;
}

export default authenticate
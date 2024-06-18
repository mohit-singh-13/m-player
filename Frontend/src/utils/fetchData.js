import axios from "axios";

export const fetchData = async (formData, btn) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;

        const URL = `${baseUrl}/${btn}`;

        const response = await axios.post(URL, formData, {
            withCredentials: true,
        });

        console.log(response);
        return response?.data;

    } catch(err) {
        alert(err.response.data.message);
    }
}
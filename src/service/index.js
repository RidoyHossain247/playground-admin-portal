
import axios from "axios";

const api = axios.create({
    baseURL: " http://localhost:5000/api",
    setTimeout: 800,
    header: {
        "content-type": "application/json",
        accept: "application/json"
    }
})
export default api
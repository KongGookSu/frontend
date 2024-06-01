import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.PROD ? "http://3.39.34.198:8080/api/accounts" : "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;

import axios from "axios";

const API_URL = "http://localhost:8080/api/accounts";
const testToken = "asdf";
export const fetchUserAccounts = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${testToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user accounts:", error);
        throw error;
    }
};

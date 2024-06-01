import axios from "axios";

import { useUserStore } from "@/store/store";

const API_URL = "http://localhost:8080/api/accounts";

export const fetchUserAccounts = async () => {
    try {
        const { accessToken } = useUserStore.getState();
        console.log("Access Token:", accessToken);
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching user accounts:", error);
        throw error;
    }
};

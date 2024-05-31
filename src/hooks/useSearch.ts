import { useState } from "react";

import booksData from "@/constants/booksData.json";

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredBooks = booksData.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return { searchTerm, handleSearch, filteredBooks };
};

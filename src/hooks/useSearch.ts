import { useState } from "react";

interface IBook {
    id: number;
    title: string;
    duration: string;
    rating: number;
    pages: number;
    description: string;
    imageUrl: string;
}

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredBooksByName = (books: IBook[]): IBook[] => {
        return books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    return { searchTerm, handleSearch, filteredBooksByName };
};

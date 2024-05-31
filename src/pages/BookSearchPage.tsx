import { useState } from "react";

import { BookItem } from "@/components/display/BookItem";
import { Search } from "@/components/display/Search";
import { SearchHint } from "@/components/display/SearchHint";
import { TopBar } from "@/components/display/TopBar";

import booksData from "@/constants/booksData.json";

import { BookList, SearchPageWrapper } from "./BookSearchPage.styled";

export default function BookSearchPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredBooks = booksData.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <TopBar title="책 검색" />
            <SearchPageWrapper>
                <Search onSearch={handleSearch} />
                {searchTerm === "" ? (
                    <SearchHint />
                ) : (
                    <BookList>
                        {filteredBooks.map((book) => (
                            <BookItem key={book.id} book={book} />
                        ))}
                    </BookList>
                )}
            </SearchPageWrapper>
        </>
    );
}

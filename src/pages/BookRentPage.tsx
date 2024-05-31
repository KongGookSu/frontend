import { useState, useEffect } from "react";

import { BookItem } from "@/components/display/BookItem";
import { Location } from "@/components/display/Location";
import { Search } from "@/components/display/Search";
import { SearchHint } from "@/components/display/SearchHint";
import { TopBar } from "@/components/display/TopBar";

import { useGeolocation } from "@/hooks/useGeolocation";
import { useSearch } from "@/hooks/useSearch";

import booksData from "@/constants/popularBookData.json";

import { BookList, BookRentPageWrapper } from "./BookRentPage.styled";

interface IBook {
    id: number;
    title: string;
    duration: string;
    rating: number;
    pages: number;
    description: string;
    imageUrl: string;
}

interface IBookData {
    place: string;
    books: IBook[];
}

const allBooksData: IBookData[] = booksData as unknown as IBookData[];

export default function BookRentPage() {
    const { city } = useGeolocation();
    const { searchTerm, handleSearch, filteredBooksByName } = useSearch();

    const [filteredBooksByPlace, setFilteredBooksByPlace] = useState<IBook[]>([]);

    useEffect(() => {
        if (city) {
            const matchedData = allBooksData.find((data) => data.place && data.place.includes(city));
            setFilteredBooksByPlace(matchedData ? matchedData.books : []);
        }
    }, [city]);

    const finalFilteredBooks = searchTerm ? filteredBooksByName(filteredBooksByPlace) : filteredBooksByPlace;

    return (
        <>
            <TopBar title="책 대여" />
            <BookRentPageWrapper>
                <Location />
                <Search onSearch={handleSearch} />
                {filteredBooksByPlace.length === 0 ? (
                    <SearchHint message="현재 도시에 책이 없습니다" />
                ) : finalFilteredBooks.length === 0 ? (
                    <SearchHint message="검색 결과가 없습니다" />
                ) : (
                    <BookList>
                        {finalFilteredBooks.map((book) => (
                            <BookItem key={book.id} book={book} />
                        ))}
                    </BookList>
                )}
            </BookRentPageWrapper>
        </>
    );
}

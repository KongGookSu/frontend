import { BookItem } from "@/components/display/BookItem";
import { Location } from "@/components/display/Location";
import { Search } from "@/components/display/Search";
import { TopBar } from "@/components/display/TopBar";

import { useSearch } from "@/hooks/useSearch";

import { BookList, BookRentPageWrapper } from "./BookRentPage.styled";

export default function BookRentPage() {
    const { handleSearch, filteredBooks } = useSearch();

    return (
        <>
            <TopBar title="책 대여" />
            <BookRentPageWrapper>
                <Location />
                <Search onSearch={handleSearch} />
                <BookList>
                    {filteredBooks.map((book) => (
                        <BookItem key={book.id} book={book} />
                    ))}
                </BookList>
            </BookRentPageWrapper>
        </>
    );
}

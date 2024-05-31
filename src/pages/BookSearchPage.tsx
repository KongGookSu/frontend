import { BookItem } from "@/components/display/BookItem";
import { Search } from "@/components/display/Search";
import { TopBar } from "@/components/display/TopBar";

import booksData from "@/constants/booksData.json";

import { BookList, SearchPageWrapper } from "./BookSearchPage.styled";

export default function BookSearchPage() {
    return (
        <>
            <TopBar title="책 검색" />
            <SearchPageWrapper>
                <Search />

                <BookList>
                    {booksData.map((book) => (
                        <BookItem key={book.id} book={book} />
                    ))}
                </BookList>
            </SearchPageWrapper>
        </>
    );
}

import { BookItem } from "@/components/display/BookItem";
import { Search } from "@/components/display/Search";
import { SearchHint } from "@/components/display/SearchHint";
import { TopBar } from "@/components/display/TopBar";

import { useSearch } from "@/hooks/useSearch";

import { BookList, SearchPageWrapper } from "./BookSearchPage.styled";

export default function BookSearchPage() {
    const { searchTerm, handleSearch, filteredBooks } = useSearch();

    return (
        <>
            <TopBar title="책 검색" />
            <SearchPageWrapper>
                <Search onSearch={handleSearch} />
                {searchTerm === "" ? (
                    <SearchHint message="검색 창에 텍스트를 입력해주세요" />
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

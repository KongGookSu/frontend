import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import { SearchContainer, SearchInnerTextWrapper, SearchInput, SearchButton, SearchWrapper } from "./Search.styled";

export const Search: React.FC = () => {
    return (
        <>
            <SearchWrapper>
                <SearchContainer>
                    <SearchInnerTextWrapper>
                        <IoSearchOutline size={26} color="black" />

                        <SearchInput type="text" placeholder="책 검색하기..." />
                    </SearchInnerTextWrapper>
                    <SearchButton>
                        <IoSearchOutline size={20} color="white" />
                    </SearchButton>
                </SearchContainer>
            </SearchWrapper>
        </>
    );
};

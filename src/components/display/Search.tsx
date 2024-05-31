import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { SearchContainer, SearchInnerTextWrapper, SearchInput, SearchButton, SearchWrapper } from "./Search.styled";

interface ISearch {
    onSearch?: (term: string) => void;
}

export const Search: React.FC<ISearch> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setInputValue(term);
        if (onSearch) {
            onSearch(term);
        }
    };

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(inputValue);
        } else {
            navigate("/search");
        }
    };

    return (
        <>
            <SearchWrapper>
                <SearchContainer onClick={handleSearchClick}>
                    <SearchInnerTextWrapper>
                        <IoSearchOutline size={26} color="black" />
                        <SearchInput
                            type="text"
                            placeholder="책 검색하기..."
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </SearchInnerTextWrapper>
                    <SearchButton>
                        <IoSearchOutline size={20} color="white" />
                    </SearchButton>
                </SearchContainer>
            </SearchWrapper>
        </>
    );
};

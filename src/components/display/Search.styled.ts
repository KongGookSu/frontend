import styled from "styled-components";

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    padding: 20px 0;
    border-radius: 20px;
`;

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const SearchInnerTextWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 20px 0 0 20px;
`;

export const SearchButton = styled.button`
    padding: 10px;
    align-items: center;
    background-color: #9045dc;
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 10px;
`;

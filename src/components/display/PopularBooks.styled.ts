import styled from "styled-components";

interface IFilterButton {
    active: boolean;
}

export const PopularBooksWrapper = styled.div``;

export const FilterContainer = styled.div`
    display: flex;
    gap: 10px;
    padding-bottom: 20px;
    overflow-x: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const PopularBooksContainer = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ParagraphWrapper = styled.div`
    margin: 0 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 8px;
`;

export const FilterButton = styled.button<IFilterButton>`
    min-width: 80px;
    height: 30px;
    border: none;
    border-radius: 20px;
    background-color: ${(props) => (props.active ? "#AE7AE3" : "#ffffff")};
    color: ${(props) => (props.active ? "#ffffff" : "#000000")};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    outline: none;
    white-space: nowrap;
`;

export const BookCard = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
    min-width: 280px;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    margin: 0 0 15px 5px;

    img {
        width: 100%;
        border-radius: 10px 10px 0 0 !important;
        margin-bottom: 15px;
    }
`;

export const BookDescription = styled.div`
    margin: 0 20px 20px 20px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 0.8;
`;

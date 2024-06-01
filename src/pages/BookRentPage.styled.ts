import styled from "styled-components";

export const BookRentPageWrapper = styled.div`
    background-color: #f2eeff;
`;

export const BookList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`;

export const LoadingMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 18px;
    color: #666;
    animation: loading 1.5s infinite;

    @keyframes loading {
        0%,
        100% {
            content: "검색 중입니다.";
        }
        33% {
            content: "검색 중입니다..";
        }
        67% {
            content: "검색 중입니다...";
        }
    }
`;

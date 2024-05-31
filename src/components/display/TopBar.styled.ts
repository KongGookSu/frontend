import styled from "styled-components";

export const TopBarWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    height: 50px;
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 20px;
    z-index: 99;

    &:focus {
        outline: none;
    }
`;

export const Title = styled.div``;

import styled, { css } from "styled-components";

interface TopBarWrapperProps {
    isBookDetailPage: boolean;
}

export const TopBarWrapper = styled.div<TopBarWrapperProps>`
    display: flex;
    align-items: center;
    padding: 10px 0;
    height: 50px;

    ${(props) =>
        props.isBookDetailPage &&
        css`
            padding: 0 10px;
        `}
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

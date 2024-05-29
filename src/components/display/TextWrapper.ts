import styled from "styled-components";

interface TextWrapperProps {
    backgroundColor?: string;
}

export const TextWrapper = styled.div<TextWrapperProps>`
    background-color: ${(props) => props.backgroundColor ?? "#fff"};
    border-radius: 16px;
    height: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
`;

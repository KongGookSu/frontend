import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    padding: 20px;
    margin: 10px 0;
`;

export const CardImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #333;
    font-size: 16px;
    font-weight: bold;
`;

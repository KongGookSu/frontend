import styled from "styled-components";

export const TopRankersWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`;

export const RankerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RankerImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 20px;
    object-fit: cover;
    margin-bottom: 10px;
`;

import styled from "styled-components";

export const BookDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f2eeff;
    border-radius: 10px;
    margin-top: -60px;
`;

export const BookImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;

export const BookInfoWrapper = styled.div`
    padding: 20px 30px 40px 30px;
`;

export const IntroduceBook = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: -50px;
    padding: 30px;
    border-radius: 20px;
    background-color: white;
`;

export const BookInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    color: #757575;
`;

export const BookInfoParagraphWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2eeff;
    width: 100%;
    height: 40px;
    margin: 20px 0 10px 0;
    border: 1px solid #ae7ae3;
`;

export const BookDescriptionWrapper = styled.div`
    margin-bottom: 20px;
`;

export const BookMetaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 50px;
`;

export const BookMetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const BookRentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
`;

export const BookRentItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`;

export const UserImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 20px;
`;

export const RatingTextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

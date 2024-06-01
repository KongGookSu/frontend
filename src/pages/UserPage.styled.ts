import styled, { keyframes } from "styled-components";

export const UserPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f2eeff;
    min-height: 100vh;
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;
`;

export const UserImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

export const UserName = styled.h2`
    font-size: 20px;
    font-weight: bold;
`;

export const UserEmail = styled.p`
    font-size: 14px;
    color: #888;
`;

export const LocationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px 25px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 10px;
`;

export const LocationText = styled.p`
    font-size: 16px;
`;

export const MapWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
`;

export const RegisterButton = styled.button`
    margin-top: 20px;
    padding: 15px 30px;
    font-size: 16px;
    color: white;
    background-color: #9045dc;
    border: none;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #7a37b3;
    }
`;

export const EnrolledLocationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const EnrolledLocationText = styled.p`
    font-size: 16px;
`;

export const MatchingLocationText = styled(EnrolledLocationText)`
    font-weight: bold;
    color: green;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
`;

const dotFlashing = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`;

export const LoadingDots = styled.span`
    &::after {
        content: ".";
        animation: ${dotFlashing} 1s infinite steps(1, start);
    }

    &::before {
        content: "..";
        animation: ${dotFlashing} 1s infinite steps(2, start);
    }
`;

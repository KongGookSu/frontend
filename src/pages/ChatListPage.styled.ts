import styled from "styled-components";

export const ChatListPageWrapper = styled.div``;

export const ChatItem = styled.div`
    display: flex;
    align-items: center;
    padding: 25px 30px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 15px;
    margin-bottom: 20px;
`;

export const UserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const ChatItemInnerRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    margin-left: auto;
`;

export const UnreadMessageCount = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9045dc;
    border-radius: 50%;
`;

export const LastReceivedTime = styled.div``;

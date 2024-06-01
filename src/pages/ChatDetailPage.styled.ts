import styled from "styled-components";

export const ChatDetailWrapper = styled.div`
    background-color: #f2eeff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`;

export const MessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
    height: calc(100vh - 260px);
    overflow-y: auto;
`;

export const MessageItem = styled.div<{ type: "sent" | "received" }>`
    align-self: ${(props) => (props.type === "sent" ? "flex-end" : "flex-start")};
    background-color: ${(props) => (props.type === "sent" ? "#9045DC" : "#AE7AE3")};
    color: white;
    padding: 20px;
    border-radius: 20px;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const MessageText = styled.div``;

export const MessageTime = styled.div`
    align-self: flex-end;
    opacity: 0.7;
`;

export const InputWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    border-top: 1px solid #e0e0e0;
    border: none;
    align-items: center;
    justify-content: center;
    padding: 15px 0 50px 0;
`;

export const MessageInputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #9045dc;
    border-radius: 45px;
`;

export const MessageInput = styled.input`
    flex-grow: 1;
    padding: 20px;
    border: none;
    outline: none;
`;

export const SendButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9045dc;
    width: 48px;
    height: 48px;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;

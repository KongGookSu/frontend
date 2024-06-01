import { useEffect, useState, useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { useParams } from "react-router-dom";

import { TopBar } from "@/components/display/TopBar";
import { Text } from "@/components/typography/Text";

import chatDetailData from "@/constants/chatDetailData.json";

import {
    ChatDetailWrapper,
    MessagesWrapper,
    MessageItem,
    MessageText,
    MessageTime,
    InputWrapper,
    MessageInputWrapper,
    MessageInput,
    SendButton,
} from "./ChatDetailPage.styled";

interface IMessage {
    id: number;
    sender: string;
    message: string;
    time: string;
    type: "sent" | "received";
}

export default function ChatDetailPage() {
    const { chatId } = useParams<{ chatId: string }>();
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");
    const messageEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const data = chatDetailData as { messages: IMessage[] };
        setMessages(data.messages);
    }, [chatId]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim() === "") return;

        const newMessageData: IMessage = {
            id: messages.length + 1,
            sender: "나",
            message: newMessage,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            type: "sent",
        };

        setMessages([...messages, newMessageData]);
        setNewMessage("");
    };

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <TopBar title="윤재용" />

            <ChatDetailWrapper>
                <MessagesWrapper>
                    {messages.map((message) => (
                        <MessageItem key={message.id} type={message.type}>
                            <MessageText>
                                <Text size="s">{message.message}</Text>
                            </MessageText>
                            <MessageTime>
                                <Text size="s">{message.time}</Text>
                            </MessageTime>
                        </MessageItem>
                    ))}
                    <div ref={messageEndRef} />
                </MessagesWrapper>

                <InputWrapper>
                    <MessageInputWrapper>
                        <MessageInput
                            placeholder="메세지 입력..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    handleSendMessage();
                                }
                            }}
                        />
                        <SendButton onClick={handleSendMessage}>
                            <RiSendPlaneFill size={24} />
                        </SendButton>
                    </MessageInputWrapper>
                </InputWrapper>
            </ChatDetailWrapper>
        </>
    );
}

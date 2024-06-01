import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TopBar } from "@/components/display/TopBar";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import chatData from "@/constants/chatData.json";

import {
    ChatListPageWrapper,
    ChatItem,
    UserImage,
    ChatItemInnerRight,
    UnreadMessageCount,
    LastReceivedTime,
} from "./ChatListPage.styled";

interface IChat {
    id: number;
    name: string;
    message: string;
    time: string;
    unreadCount: number;
    avatarUrl: string;
}

export default function ChatListPage() {
    const [chats, setChats] = useState<IChat[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setChats(chatData);
    }, []);

    return (
        <>
            <TopBar title="채팅 목록" />

            <ChatListPageWrapper>
                {chats.map((chat) => (
                    <ChatItem key={chat.id} onClick={() => navigate(`/chat/${chat.id}`)}>
                        <UserImage src={chat.avatarUrl} />
                        <div>
                            <Paragraph size="m" weight="bold">
                                {chat.name}
                            </Paragraph>
                            <Paragraph size="xs">{chat.message}</Paragraph>
                        </div>
                        <ChatItemInnerRight>
                            {chat.unreadCount > 0 && (
                                <UnreadMessageCount>
                                    <Text size="xs" variant="white">
                                        {String(chat.unreadCount).padStart(2, "0")}
                                    </Text>
                                </UnreadMessageCount>
                            )}
                            <LastReceivedTime>
                                <Text size="xs" weight="bold">
                                    {chat.time}
                                </Text>
                            </LastReceivedTime>
                        </ChatItemInnerRight>
                    </ChatItem>
                ))}
            </ChatListPageWrapper>
        </>
    );
}

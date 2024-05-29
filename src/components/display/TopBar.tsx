import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { Text } from "@/components/typography/Text";

import { TopBarWrapper, BackButton, Title } from "./TopBar.styled";

interface TopBarProps {
    title: string;
}

export const TopBar: React.FC<TopBarProps> = ({ title }) => {
    const navigate = useNavigate();

    return (
        <TopBarWrapper>
            <BackButton onClick={() => navigate(-1)}>
                <BiLeftArrowAlt size={25} />
            </BackButton>
            <Title>
                <Text size="xl" weight="bold">
                    {title}
                </Text>
            </Title>
        </TopBarWrapper>
    );
};

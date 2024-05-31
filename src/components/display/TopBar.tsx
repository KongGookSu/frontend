import { BiLeftArrowAlt } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

import { Text } from "@/components/typography/Text";

import { BackButton, Title, TopBarWrapper } from "./TopBar.styled";

export const TopBar = ({ title }: { title: string }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isBookDetailPage = location.pathname.startsWith("/book/");

    return (
        <TopBarWrapper isBookDetailPage={isBookDetailPage}>
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

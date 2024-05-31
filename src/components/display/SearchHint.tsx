import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import { Text } from "@/components/typography/Text";

import { HintWrapper } from "./SearchHint.styled";

interface SearchHintProps {
    message: string;
}

export const SearchHint: React.FC<SearchHintProps> = ({ message }) => {
    return (
        <HintWrapper>
            <IoSearchOutline size={32} color="gray" />
            <Text size="m" variant="gray">
                {message}
            </Text>
        </HintWrapper>
    );
};

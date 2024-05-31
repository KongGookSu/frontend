import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import { Text } from "@/components/typography/Text";

import { HintWrapper } from "./SearchHint.styled";

export const SearchHint: React.FC = () => {
    return (
        <HintWrapper>
            <IoSearchOutline size={32} color="gray" />
            <Text size="m" variant="gray">
                검색어를 입력해주세요
            </Text>
        </HintWrapper>
    );
};

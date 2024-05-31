import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Text } from "@/components/typography/Text";

import { Paragraph } from "../typography/Paragraph";
import { BookItemWrapper, BookInfo, RatingTextWrapper } from "./BookItem.styled";

interface Book {
    id: number;
    title: string;
    rating: number;
    pages: number;
}

interface BookItemProps {
    book: Book;
}

export const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/book/${book.id}`);
    };

    return (
        <BookItemWrapper onClick={handleItemClick}>
            <Paragraph size="m" weight="bold">
                {book.title}
            </Paragraph>
            <BookInfo>
                <Text size="xs" variant="yellow">
                    <RatingTextWrapper>
                        <AiFillStar color="#f1c40f" />
                        {book.rating}
                    </RatingTextWrapper>
                </Text>
                <Text size="xs">|</Text>
                <Text size="xs" variant="gray">
                    {book.pages}쪽
                </Text>
            </BookInfo>
        </BookItemWrapper>
    );
};

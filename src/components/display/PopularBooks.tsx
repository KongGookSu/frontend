import { useState } from "react";
import { FaCalendar, FaRegStar } from "react-icons/fa";

import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import popularBookData from "@/constants/popularBookData.json";

import {
    PopularBooksWrapper,
    PopularBooksContainer,
    ParagraphWrapper,
    FilterContainer,
    FilterButton,
    BookCard,
    BookDescription,
} from "./PopularBooks.styled";

interface IBook {
    id: number;
    title: string;
    duration: string;
    rating: number;
    pages: number;
    description: string;
    imageUrl: string;
}

interface IBookData {
    place: string;
    books: IBook[];
}

const booksData: IBookData[] = popularBookData as IBookData[];

export const PopularBooks: React.FC = () => {
    const [selectedPlace, setSelectedPlace] = useState<string>("대구");

    const handleFilterClick = (place: string) => {
        setSelectedPlace(place);
    };

    const filteredBooks = booksData.find((data) => data.place === selectedPlace)?.books || [];

    return (
        <>
            <PopularBooksWrapper>
                <FilterContainer>
                    {booksData.map((data) => (
                        <FilterButton
                            key={data.place}
                            active={selectedPlace === data.place}
                            onClick={() => handleFilterClick(data.place)}
                        >
                            <Text size="xs" weight="bold">
                                {data.place}
                            </Text>
                        </FilterButton>
                    ))}
                </FilterContainer>

                <PopularBooksContainer>
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id}>
                            <img src={book.imageUrl} alt={book.title} style={{ width: "100%", borderRadius: "10px" }} />
                            <ParagraphWrapper>
                                <Paragraph size="s" weight="bold">
                                    {book.title}
                                </Paragraph>
                            </ParagraphWrapper>

                            <ParagraphWrapper>
                                <FaCalendar size={12} color="#9045DC" />
                                <Text size="s" variant="primary">
                                    {book.duration}
                                </Text>
                                | <FaRegStar size={12} color="#FCCB40" />
                                <Text size="s" variant="yellow">
                                    {book.rating}
                                </Text>
                                | <Text size="s">{book.pages}쪽</Text>
                            </ParagraphWrapper>

                            <BookDescription>
                                <Text size="xxs" variant="gray">
                                    {book.description}
                                </Text>
                            </BookDescription>
                        </BookCard>
                    ))}
                </PopularBooksContainer>
            </PopularBooksWrapper>
        </>
    );
};

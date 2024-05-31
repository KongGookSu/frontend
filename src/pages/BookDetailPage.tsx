import { AiFillStar } from "react-icons/ai";
import { FaBuilding, FaBarcode } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuBookMinus } from "react-icons/lu";
import { useParams } from "react-router-dom";

import { TopBar } from "@/components/display/TopBar";
import { Button } from "@/components/forms/Button";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import booksData from "@/constants/popularBookData.json";

import {
    BookDetailWrapper,
    BookImage,
    BookInfoWrapper,
    IntroduceBook,
    BookInfo,
    BookInfoParagraphWrapper,
    BookMetaWrapper,
    BookMetaItem,
    BookRentWrapper,
    BookRentItem,
    UserInfoWrapper,
    UserImage,
    RatingTextWrapper,
} from "./BookDetailPage.styled";

interface IBook {
    id: number;
    title: string;
    duration: string;
    rating: number;
    pages: number;
    description: string;
    imageUrl: string;
    author: string;
    publisher: string;
    isbn: string;
    publicationDate: string;
}

interface IBookData {
    place: string;
    books: IBook[];
}

const allBooksData: IBookData[] = booksData as unknown as IBookData[];

export default function BookDetailPage() {
    const { bookId } = useParams<{ bookId: string }>();
    const book = allBooksData.flatMap((data) => data.books).find((book) => book.id === Number(bookId));

    if (!book) {
        return <div>책을 찾을 수 없습니다.</div>;
    }

    return (
        <>
            <TopBar title="" />

            <BookDetailWrapper>
                <BookImage src={book.imageUrl} alt={book.title} />

                <BookInfoWrapper>
                    <IntroduceBook>
                        <Paragraph size="xl" weight="bold">
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

                        <BookInfoParagraphWrapper>
                            <Text size="s">책 소개</Text>
                        </BookInfoParagraphWrapper>

                        <Text size="xxs" variant="gray">
                            {book.description}
                        </Text>
                    </IntroduceBook>

                    <BookMetaWrapper>
                        <Paragraph size="l" weight="bold">
                            도서 정보
                        </Paragraph>

                        <BookMetaItem>
                            <IoPhonePortraitOutline size={18} color="#4c935e" />
                            <Text size="s" variant="success" weight="bold">
                                도서 신청 가능
                            </Text>
                        </BookMetaItem>
                        <BookMetaItem>
                            <FiUser size={18} />
                            <Text size="s">{book.author}</Text>
                        </BookMetaItem>
                        <BookMetaItem>
                            <LuBookMinus size={18} />
                            <Text size="s">{book.pages}쪽</Text>
                        </BookMetaItem>
                        <BookMetaItem>
                            <FaBuilding size={18} />
                            <Text size="s">{book.publisher}</Text>
                        </BookMetaItem>
                        <BookMetaItem>
                            <FaBarcode size={18} />
                            <Text size="s">{book.isbn}</Text>
                        </BookMetaItem>
                        <BookMetaItem>
                            <IoCalendarClearOutline size={18} />
                            <Text size="s">{book.publicationDate}</Text>
                        </BookMetaItem>
                    </BookMetaWrapper>

                    <BookRentWrapper>
                        <Paragraph size="l" weight="bold">
                            책 대여 가능자 (거리 순)
                        </Paragraph>

                        <BookRentItem>
                            <UserInfoWrapper>
                                <UserImage src="https://avatars.githubusercontent.com/u/49743742?v=4" alt="User 1" />
                                <div>
                                    <Paragraph size="m" weight="bold">
                                        심규민
                                    </Paragraph>
                                    <Paragraph size="xs" variant="gray">
                                        568m
                                    </Paragraph>
                                </div>
                            </UserInfoWrapper>
                            <Button size="s" variant="primary">
                                <Text size="s" variant="white">
                                    채팅하기
                                </Text>
                            </Button>
                        </BookRentItem>
                    </BookRentWrapper>
                </BookInfoWrapper>
            </BookDetailWrapper>
        </>
    );
}

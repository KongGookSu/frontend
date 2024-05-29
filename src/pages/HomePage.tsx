import { Event } from "@/components/display/Event";
import { PopularBooks } from "@/components/display/PopularBooks";
import { Search } from "@/components/display/Search";
import { TopRankers } from "@/components/display/TopRankers";
import { Button } from "@/components/forms/Button";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import { Container, HelloContent, SectionWrapper, ButtonWrapper } from "./HomePage.styled";

const dummyName = "준혁";
const dummyPlace = "대구";

export default function HomePage() {
    return (
        <>
            <Container>
                {/* 환영 섹션 */}
                <HelloContent>
                    <Paragraph size="xxl" weight="bold">
                        안녕하세요, {dummyName}님!
                    </Paragraph>
                    <Paragraph size="s" variant="gray">
                        오늘은 어떤 책을 읽고 싶으신가요? <br />
                        함께 책을 읽으러 가봐요!
                    </Paragraph>
                </HelloContent>

                {/* 검색 섹션 */}
                <Search />

                {/* 이벤트 섹션 */}
                <Event />

                {/* 시작하기 섹션 */}
                <SectionWrapper>
                    <Paragraph size="l" weight="bold">
                        시작하기
                    </Paragraph>
                    <ButtonWrapper>
                        <Button size="m" variant="primary">
                            <Text size="s" weight="bold">
                                책 등록하기
                            </Text>
                        </Button>
                        <Button size="m" variant="primary">
                            <Text size="s" weight="bold">
                                책 대여하기
                            </Text>
                        </Button>
                    </ButtonWrapper>
                </SectionWrapper>

                {/* 인기도서 섹션 */}
                <SectionWrapper>
                    <Paragraph size="l" weight="bold">
                        인기있는 도서
                    </Paragraph>
                    <PopularBooks />
                </SectionWrapper>

                {/* 랭커 섹션 */}
                <SectionWrapper>
                    <Paragraph size="l" weight="bold">
                        {dummyPlace} 지역 연간 대여자 Top Ranker
                    </Paragraph>
                    <TopRankers />
                </SectionWrapper>
            </Container>
        </>
    );
}

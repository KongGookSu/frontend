import { FaAsterisk } from "react-icons/fa6";

import { Card } from "@/components/display/Card";
import { EssentialWrapper } from "@/components/display/EssentialWrapper";
import { PhotoUpload } from "@/components/display/PhotoUpload";
import { SectionWrapper } from "@/components/display/SectionWrapper";
import { TextWrapper } from "@/components/display/TextWrapper";
import { TopBar } from "@/components/display/TopBar";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import bookImage from "@/assets/book-default.png";

export default function BookEnrollPage() {
    return (
        <>
            <TopBar title="책 등록" />
            <Card imageUrl={bookImage}>
                <Text size="m">책의 정보를 채워주세요!</Text>
            </Card>

            <SectionWrapper>
                <EssentialWrapper>
                    <Paragraph size="l" weight="bold">
                        책 사진
                    </Paragraph>
                    <FaAsterisk size={10} color="red" />
                </EssentialWrapper>
                <PhotoUpload />
            </SectionWrapper>

            <SectionWrapper>
                <EssentialWrapper>
                    <Paragraph size="l" weight="bold">
                        책 이름
                    </Paragraph>
                    <FaAsterisk size={10} color="red" />
                </EssentialWrapper>
                <TextWrapper />
            </SectionWrapper>

            <SectionWrapper>
                <Paragraph size="l" weight="bold">
                    저자
                </Paragraph>
                <TextWrapper backgroundColor="#AFB3B7" />
            </SectionWrapper>

            <SectionWrapper>
                <Paragraph size="l" weight="bold">
                    출판사
                </Paragraph>
                <TextWrapper backgroundColor="#AFB3B7" />
            </SectionWrapper>

            <SectionWrapper>
                <Paragraph size="l" weight="bold">
                    ISBN
                </Paragraph>
                <TextWrapper backgroundColor="#AFB3B7" />
            </SectionWrapper>

            <SectionWrapper>
                <Paragraph size="l" weight="bold">
                    등록자
                </Paragraph>
                <TextWrapper backgroundColor="#AFB3B7" />
            </SectionWrapper>
        </>
    );
}

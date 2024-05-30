import { FcGoogle } from "react-icons/fc";

import styled from "styled-components";

import { Button } from "@/components/forms/Button";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import logo from "@/assets/logo.png";

export default function LoginPage() {
    return (
        <LoginPageWrapper>
            <Logo src={logo} alt="가지 도서관 로고" />
            <Slogan>
                <Paragraph size="m" variant="secondary">
                    가까운 이웃들과 함께,
                </Paragraph>
                <Paragraph size="m" variant="secondary">
                    지혜를 나누는 동네 책 대여소
                </Paragraph>
            </Slogan>
            <ServiceName>
                <Paragraph size="xxxl" variant="primary" weight="bold">
                    가지 도서관
                </Paragraph>
            </ServiceName>
            <Button size="l" variant="white">
                <ButtonInnerWrapper>
                    <FcGoogle size={20} />
                    <Text size="s" variant="gray" weight="bold">
                        구글로 시작하기
                    </Text>
                </ButtonInnerWrapper>
            </Button>
        </LoginPageWrapper>
    );
}

const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #f0e4ff 0%, #cfe8ff 100%);
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 50px;
`;

const Slogan = styled.div`
    text-align: center;
    margin-bottom: 30px;
`;

const ServiceName = styled.div`
    margin-bottom: 50px;
`;

const ButtonInnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import { LoginPageWrapper, Logo, Slogan, ServiceName, StyledGoogleLogin } from "@/pages/LoginPage.styled";

import logo from "@/assets/logo.png";

import { useUserStore } from "@/store/store";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

interface ServerResponse {
    accessToken: string;
    refreshToken: string;
}

export default function LoginPage() {
    const navigate = useNavigate();
    const setTokens = useUserStore((state) => state.setTokens);

    const handleSuccess = async (response: CredentialResponse) => {
        console.log("Login Success:", response);
        if (response.credential) {
            const credential = response.credential;
            try {
                const serverResponse = await axios.post<ServerResponse>(
                    `http://localhost:8080/login/oauth2/google?code=${credential}`,
                    { token: credential },
                );
                console.log("Server Response:", serverResponse.data);
                const { accessToken, refreshToken } = serverResponse.data;
                setTokens(accessToken, refreshToken);
                navigate("/", { replace: true });
            } catch (error) {
                console.error("Error sending token to server:", error);
            }
        } else {
            console.error("No credential found in response:", response);
        }
    };

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
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
                <StyledGoogleLogin>
                    <GoogleLogin onSuccess={handleSuccess} useOneTap />
                    <FcGoogle size={20} />
                    <Text size="s" variant="gray" weight="bold">
                        구글로 시작하기
                    </Text>
                </StyledGoogleLogin>
            </LoginPageWrapper>
        </GoogleOAuthProvider>
    );
}

import styled from "styled-components";

export const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #f0e4ff 0%, #cfe8ff 100%);
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 50px;
`;

export const Slogan = styled.div`
    text-align: center;
    margin-bottom: 30px;
`;

export const ServiceName = styled.div`
    margin-bottom: 50px;
`;

export const StyledGoogleLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

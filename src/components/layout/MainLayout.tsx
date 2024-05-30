import { Outlet, useLocation } from "react-router-dom";

import styled, { css } from "styled-components";

export const MainLayout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <Main isLoginPage={isLoginPage}>
            <Outlet />
        </Main>
    );
};

interface MainProps {
    isLoginPage: boolean;
}

const Main = styled.main<MainProps>`
    width: min(100%, 700px);
    margin: 0px auto;
    min-height: 100vh;
    background-color: #f2eeff;
    padding: 30px;
    box-sizing: border-box;

    ${(props) =>
        props.isLoginPage &&
        css`
            padding: 0;
        `}
`;

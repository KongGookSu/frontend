import { Outlet, useLocation } from "react-router-dom";

import styled, { css } from "styled-components";

export const MainLayout = () => {
    const location = useLocation();
    const isLoginOrDetailPage = location.pathname === "/login" || location.pathname.startsWith("/book/");

    return (
        <Main isSpecialPage={isLoginOrDetailPage}>
            <Outlet />
        </Main>
    );
};

interface MainProps {
    isSpecialPage: boolean;
}

const Main = styled.main<MainProps>`
    width: min(100%, 700px);
    margin: 0px auto;
    min-height: 100vh;
    background-color: #f2eeff;
    padding: 30px;
    box-sizing: border-box;

    ${(props) =>
        props.isSpecialPage &&
        css`
            padding: 0;
        `}
`;

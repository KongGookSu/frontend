import { Outlet } from "react-router-dom";

import styled from "styled-components";

export const Main = styled.main`
    width: min(100%, 700px);
    margin: 0px auto;
    min-height: 100vh;
    background-color: #f2eeff;
    padding: 30px;
    box-sizing: border-box;
`;

export const MainLayout = () => {
    return (
        <>
            <Main>
                <Outlet />
            </Main>
        </>
    );
};

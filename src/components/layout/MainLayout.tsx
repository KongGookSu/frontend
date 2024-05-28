import { Outlet } from "react-router-dom";

import styled from "styled-components";

export const Main = styled.main`
  width: min(100%, 700px);
  margin: 0px auto;
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

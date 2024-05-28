import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/globals.ts";
import { MainLayout } from "@/components/layout/MainLayout";
import HomePage from "@/pages/HomePage";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

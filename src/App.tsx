import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/globals.ts";
import { MainLayout } from "@/components/layout/MainLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import BookSearchPage from '@/pages/BookSearchPage';
import BookEnrollPage from "@/pages/BookEnrollPage";
import BookRentPage from "@/pages/BookRentPage";
import BookDetailPage from "@/pages/BookDetailPage";
import ChatListPage from "@/pages/ChatListPage";
import ChatDetailPage from "@/pages/ChatDetailPage";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<BookSearchPage />} />
          <Route path="/enroll" element={<BookEnrollPage />} />
          <Route path="/book" element={<BookRentPage />} />
          <Route path="/book/:bookId" element={<BookDetailPage />} />
          <Route path="/chat" element={<ChatListPage />} />
          <Route path="/chat/:chatId" element={<ChatDetailPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

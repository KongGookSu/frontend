import { Routes, Route } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";

import BookDetailPage from "@/pages/BookDetailPage";
import BookEnrollPage from "@/pages/BookEnrollPage";
import BookRentPage from "@/pages/BookRentPage";
import BookSearchPage from "@/pages/BookSearchPage";
import ChatDetailPage from "@/pages/ChatDetailPage";
import ChatListPage from "@/pages/ChatListPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";

import { GlobalStyle } from "@/styles/globals.ts";

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

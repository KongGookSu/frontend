import { create } from "zustand";

export interface User {
    id: number;
    email: string;
    vendor: string;
    nickname: string;
}

interface UserState {
    users: User[];
    currentUser: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    setUsers: (users: User[]) => void;
    setCurrentUser: (user: User) => void;
    setTokens: (accessToken: string, refreshToken: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
    users: [],
    currentUser: null,
    accessToken: null,
    refreshToken: null,
    setUsers: (users) => set({ users }),
    setCurrentUser: (user) => set({ currentUser: user }),
    setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
}));

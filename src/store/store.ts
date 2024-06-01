import { create } from "zustand";

export interface User {
    id: number;
    name: string;
    imageUrl: string;
    place: string;
}

interface UserState {
    users: User[];
    currentUser: User | null;
    setUsers: (users: User[]) => void;
    setCurrentUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
    users: [],
    currentUser: null,
    setUsers: (users) => set({ users }),
    setCurrentUser: (user) => set({ currentUser: user }),
}));

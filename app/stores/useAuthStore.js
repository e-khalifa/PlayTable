import { create } from "zustand";

const useAuthStore = create((set) => ({
    currentUser: null,

    login: (user) => set({ currentUser: user }),

    logout: () => set({ currentUser: null }),
}));

export default useAuthStore;

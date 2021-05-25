import create from "zustand";
import { persist } from "zustand/middleware";

const userState = persist(
  (set) => ({
    user: null,
    token: null,
    isLoggedIn: false,
    product: [],
    setUser: (user, token) => set(() => ({ user, token, isLoggedIn: true })),
    logOut: () => set({ user: null, token: null, isLoggedIn: false }),
  }),
  { name: "user-setting" }
);

export const useUserState = create(userState);

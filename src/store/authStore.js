import React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  user: null,
  token: null,
  login: (userData) => set({ user: userData?.user, token: userData?.token }),
  logout: () => set({ user: null, token: null }),
});

export const useAuthStore = create(persist(store, { name: "auth-storage" }));

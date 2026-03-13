import React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  token: null,
  login: (token) => set({ token: token }),
  logout: () => set({ token: null }),
});

export const useAuthStore = create(persist(store, { name: "auth-storage" }));

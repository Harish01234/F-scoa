import { create } from "zustand";

type StudentAuthState = {
  accessToken: string | null;
  expiresAt: number | null;

  setAccessToken: (token: string, expiresIn: number) => void;
  isExpired: () => boolean;
  clear: () => void;
};

export const useStudentAuthStore = create<StudentAuthState>((set, get) => ({
  accessToken: null,
  expiresAt: null,

  setAccessToken: (token, expiresIn) => {
    const expiresAt = Date.now() + expiresIn * 1000;

    set({
      accessToken: token,
      expiresAt,
    });
  },

  isExpired: () => {
    const { expiresAt } = get();
    if (!expiresAt) return true;

    return Date.now() > expiresAt;
  },

  clear: () => set({ accessToken: null, expiresAt: null }),
}));
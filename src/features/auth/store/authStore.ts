// import { create } from 'zustand';

// interface AuthState {
//   user: any;
//   login: (userData: any) => void;
//   logout: () => void;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   login: (userData) => set({ user: userData }),
//   logout: () => set({ user: null }),
// }));


// src/features/auth/store/authStore.ts
import { create } from 'zustand';

interface AuthState {
  user: any;
  accessToken: string | null;
  setUser: (userData: any) => void;
  setAccessToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  setUser: (userData) => set({ user: userData }),
  setAccessToken: (token) => set({ accessToken: token }),
  logout: () => set({ user: null, accessToken: null }),
}));
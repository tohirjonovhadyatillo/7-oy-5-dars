import { create } from 'zustand';
import { persist } from 'zustand/middleware';

function createAuthStore() {
  return create(
    persist(
      (set) => ({
        user: null,
        login: (username) => set({ user: { id: Date.now(), username } }),
        logout: () => set({ user: null }),
      }),
      { name: 'auth-storage' }
    )
  );
}

export const useAuthStore = createAuthStore();

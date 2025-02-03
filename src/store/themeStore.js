import { create } from 'zustand';
import { persist } from 'zustand/middleware';

function createThemeStore() {
  return create(
    persist(
      (set) => ({
        theme: 'light',
        toggleTheme: () =>
          set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      }),
      { name: 'theme-storage' }
    )
  );
}

export const useThemeStore = createThemeStore();

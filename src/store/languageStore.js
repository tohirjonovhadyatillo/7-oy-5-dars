import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const translations = {
  uz: {
    welcome: 'Xush kelibsiz',
    login: 'Kirish',
    logout: 'Chiqish',
    addTodo: "Vazifa qo'shish",
    clearCart: 'Savatchani tozalash',
  },
  en: {
    welcome: 'Welcome',
    login: 'Login',
    logout: 'Logout',
    addTodo: 'Add Todo',
    clearCart: 'Clear Cart',
  },
};

function createLanguageStore() {
  return create(
    persist(
      (set, get) => ({
        language: 'en',
        translations,
        setLanguage: (language) => set({ language }),
        t: (key) => get().translations[get().language][key],
      }),
      { name: 'language-storage' }
    )
  );
}

export const useLanguageStore = createLanguageStore();

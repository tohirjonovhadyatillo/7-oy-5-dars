import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguageStore } from "../store/languageStore.js";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'uz' : 'en')}
      className="flex items-center gap-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      <Languages size={20} />
      <span className="uppercase">{language}</span>
    </button>
  );
};

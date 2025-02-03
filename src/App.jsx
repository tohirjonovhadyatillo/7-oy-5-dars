import React from 'react';
import { ThemeToggle } from './components/ThemeToggle.jsx';
import { TodoList } from './components/TodoList.jsx'
import { ShoppingCart } from './components/ShoppingCart.jsx';
import { Auth } from './components/Auth.jsx';
import { LanguageToggle } from './components/LanguageToggle.jsx';
import { useLanguageStore } from './store/languageStore.js';
import { useThemeStore } from './store/themeStore.js';

function App() {
  const { theme } = useThemeStore();
  const { t } = useLanguageStore();

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">{t('welcome')}</h1>
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
              <Auth />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900">
                <h2 className="text-xl font-semibold mb-4">Todo List</h2>
                <TodoList />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900">
                <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { LogIn, LogOut } from 'lucide-react';
import { useAuthStore } from "../store/authStore.js"; 
import { useLanguageStore } from '../store/languageStore.js';

export const Auth = () => {
  const [username, setUsername] = useState('');
  const { user, login, logout } = useAuthStore();
  const { t } = useLanguageStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
      setUsername('');
    }
  };

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span>Welcome, {user.username}!</span>
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
        >
          <LogOut size={20} />
          {t('logout')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
        placeholder="Username"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
      >
        <LogIn size={20} />
        {t('login')}
      </button>
    </form>
  );
};

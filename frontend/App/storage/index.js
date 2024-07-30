import { useState, useEffect } from 'react';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!storage.getString('user'));

  useEffect(() => {
    const user = storage.getString('user');
    setIsAuthenticated(!!user);
  }, []);

  const login = (userData) => {
    storage.set('user', userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    storage.delete('user');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}

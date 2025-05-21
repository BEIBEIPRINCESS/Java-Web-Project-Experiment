import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  username: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Mock user credentials
const VALID_CREDENTIALS = [
  { username: 'admin', password: 'admin123' },
  { username: 'user1', password: 'user123' },
  { username: 'user2', password: 'user456' },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    // Check if user is stored in sessionStorage
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : { username: '', isAuthenticated: false };
  });

  // Update sessionStorage when user changes
  useEffect(() => {
    if (user.isAuthenticated) {
      sessionStorage.setItem('user', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('user');
    }
  }, [user]);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const matchedUser = VALID_CREDENTIALS.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (matchedUser) {
      setUser({ username, isAuthenticated: true });
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser({ username: '', isAuthenticated: false });
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
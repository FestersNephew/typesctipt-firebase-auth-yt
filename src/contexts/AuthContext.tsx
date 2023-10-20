import React, { createContext, ReactNode, useState } from 'react';

interface AuthContextType {
  userUID: string | null;
  setUserUID: (uid: string | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  userUID: null,
  setUserUID: () => {} // A dummy function, you can provide a meaningful implementation
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userUID, setUserUID] = useState<string | null>(null);

  console.log('userUID:', userUID);

  return (
    <AuthContext.Provider value={{ userUID, setUserUID }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

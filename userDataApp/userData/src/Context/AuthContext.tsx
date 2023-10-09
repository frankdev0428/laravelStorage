import React, { createContext, useContext ,  useState, ReactNode} from 'react'
interface User {
    id: number ;
    username: string;
}
interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
})
interface AuthProviderProps {
    children: ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const login = (userData: User) => {
     //Perform logout (e.g., clear user data)
     // Update user state to null
     setUser(userData);
    };
    const logout = () => {
        //Perform logout (e.g., clear user data)
        // Update user state to null 
        setUser(null);
    };
    
   return (
      <AuthContext.Provider value={{ user , login , logout }}>
        {children}
      </AuthContext.Provider>
   );
};

export default AuthContext
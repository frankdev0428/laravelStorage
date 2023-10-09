import React, { createContext, useContext , useReducer, useState} from 'react'
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

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null);;
    const login = (userData: User) => {
     //Perform logout (e.g., clear user data)
     // Update user state to null
    };
    const logout = () => {
        //Perform logout (e.g., clear user data)
        // Update user state to null 
    };
    
   return (
      <AuthContext.Provider value={{ user , login , logout }}>
        {children}
      </AuthContext.Provider>
   );
};

export default AuthContext
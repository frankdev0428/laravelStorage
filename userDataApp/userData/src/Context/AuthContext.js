import React, { createContext, useContext , useReducer, useState} from 'react'

const AuthContext = createContext({
    user: null;
    login: () => {},
    logout: () => {},
})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);;
    const login = (useData) => {
     //Perform logout (e.g., clear user data)
     // Update user state to null
    };
    const logout = () => {
        //Perform logout (e.g., clear user data)
        // Update user state to null 
    };
    
   return (
      <AuthContext.Provider value={{ user,login. logout }}>
        {children}
      </AuthContext.Provider>
   )
}

export default AuthContext
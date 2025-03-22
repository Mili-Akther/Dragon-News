import React, { createContext, useState } from 'react';
import { useFormState } from 'react-dom';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name:"mili",
        email:"akther@ma.com"
    });
    const authInfo = {
        user,
        setUser,
    }
    return (
        
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
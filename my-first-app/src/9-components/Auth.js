import React, { useState } from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = ({Children}) => {
    const [user, setUser] = useState(null);
    
    const LogIn = (name) =>{
        setUser(name)
    }

    const LogOut = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user, LogIn, LogOut}}>
            {Children}
        </AuthContext.Provider>
    )
}